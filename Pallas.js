import { BehaviorContext } from './Behavior';
import { BehaviorBuilder } from './BehaviorBuilder';
import { me, objMgr } from './ObjectManager';

class Pallas {
  async initialize() {
    // update object manager so 'me' is available
    objMgr.update();
    //this.events = new EventListener;
    this.behaviorBuilder = new BehaviorBuilder;
    await this.behaviorBuilder.initialize();
    this.rebuild();

    this.updateTimer = setInterval(() => { this.update(); }, 1);
  }

  update() {
    objMgr.update();
    if (objMgr.me) {
      try {
        this.rootBehavior?.process();
      } catch (e) {
        this.rootBehavior = null;
        console.log(e);
      }
    }
  }

  rebuild() {
    if (me) {
      this.rootBehavior = this.behaviorBuilder.build(me.specId, BehaviorContext.Normal);
    }
  }
}

const pallas = new Pallas;
pallas.initialize().then(_ => console.log('Pallas initialized')).catch(e => console.log(`${e}\n${e.stack}`));
