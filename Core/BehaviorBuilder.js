import * as fs from 'fs';
import { gameFlavor } from 'wow';
import { Behavior, BehaviorContext } from './Behavior';
import * as bt from './BehaviorTree';
import { Specialization } from './Data/Specialization';

export class BehaviorBuilder {
  #behaviorPath = "/Behaviors";

  async initialize() {
    this.behaviors = new Array();
    await this.#collectBehaviors();
  }

  build(spec, context) {
    const root = new bt.Selector();
    const behaviors = this.getComposites(spec, context);
    behaviors.forEach(v => root.addChild(v.build()));
    return root;
  }

  /**
   * Returns an Array of composites matching specialization and context
   * @param {Specialization} spec
   * @param {BehaviorContext} context
   * @returns {Composite[]}
   */
  getComposites(spec, context) {
    return this.behaviors.filter(behavior => behavior.specialization == spec && (behavior.context == context || behavior.context == BehaviorContext.All));
  }

  #isClass(cls) {
    return new String(cls).startsWith("class");
  }

  #isObjectBehavior(m, o) {
    if (!this.#isClass(m[o])) {
      //console.log(`${o} is not a class`);
      return false;
    }
    if (!(Object.getPrototypeOf(new m[o]()) instanceof Behavior)) {
      //console.log(`${o} does not extend Behavior`);
      return false;
    }
    //console.log(`${o} is a Behavior object`);
    return true;
  }

  #isValidBehavior(name, o) {
    if (!o.specialization || o.specialization == Specialization.Invalid) {
      console.log(`${name} invalid specialization`);
      return false;
    }
    if (!o.flavor || o.flavor == -1) {
      console.log(`${name} invalid game flavor`);
      return false;
    }
    if (o.flavor != gameFlavor) {
      // current game flavor mismatch, ignore this behavior
      return false;
    }
    if (!o.build || !(o.build instanceof Function)) {
      console.log(`${name} missing build() function`);
      return false;
    }
    console.log(`${name} is for ${o.specialization}`);
    return true;
  }

  async #collectBehaviors() {
    const dir = fs.opendir(this.#behaviorPath);
    let dirent;
    while ((dirent = dir.read()) !== null) {
      await this.#itrDirent(dirent, this.behaviors)
    }
    console.log(`Collected ${this.behaviors.length} behaviors`);
  }

  async #itrDirent(dirent, out) {
    if (dirent.isDirectory()) {
      const dir = fs.opendir(dirent.path);
      let dirent2;
      while ((dirent2 = dir.read()) !== null) {
        await this.#itrDirent(dirent2, out);
      }
    } else if (dirent.isFile()) {
      try {
        const m = await import(dirent.path);
        Object.keys(m).forEach(o => {
          if (this.#isObjectBehavior(m, o)) {
            const behavior = new m[o]();
            if (this.#isValidBehavior(o, behavior)) {
              out.push(behavior);
            }
          }
        });
      } catch (e) {
        console.log(`${dirent.file}: ${e}`);
      }
    }
  }
}