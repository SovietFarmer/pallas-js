import { currentScript } from 'wector';
import { GenderType, FrameScript, WoWGuid, gameFlavor, GameFlavor } from 'wow';
import { BehaviorContext } from './Behavior';
import { BehaviorBuilder } from './BehaviorBuilder';
import { Specialization } from './Data/Specialization';
import { me, objMgr } from './ObjectManager';

import('./tests/test_fs').then(_ => console.log('test fs done')).catch(e => console.log(`${e}\n${e.stack}`));

objMgr.update();
if (objMgr.me) {
  me.foo("moooo");
  console.log(me.bar);

  console.log(`Me: ${me.name}`);
  console.log(`Items: ${objMgr.items.length}`);
  console.log(`Units: ${objMgr.units.length}`);
  console.log(`Players: ${objMgr.players.length}`);
  const females = objMgr.units.filter(u => u.gender == GenderType.Female);
  console.log(`${females.length} females near you :)`);
  [me.getAura("Battle Shout"), me.getVisibleAura("Battle Shout"), me.getRaidAura("Battle Shout")].forEach(bs => {
    console.log(`${bs?.name} (${bs?.id}) ${bs?.remaining / 1000} seconds remaining`);
  });

  if (gameFlavor == GameFlavor.Wrath) {
    const spec = me.talents;
    console.log(`Active Specialization Group: ${spec.activeSpecGroup}`);
    console.log(`Num Specialization Group: ${spec.numSpecGroups}`);
    console.log(`Unspent Talent Points: ${spec.unspentTalentPoints}`);
    spec.specGroups.forEach(group => {
      console.log('Specialization group');
      console.log(`Unspent Talent Points: ${group.unspentPoints}`);
      console.log(`Role: ${group.role}`);
      group.tabs.forEach(tab => {
        console.log(`Talent tab ${tab.name} (id ${tab.id}) has ${tab.points} used points`);
      });
    });
  }
  else {
    console.log(`Active Specialization ID: ${me.activeSpecId}`);
  }
} else {
  console.log('Could not find me');
}

console.log("=== Script");
console.log(`name: ${currentScript.name}`);
console.log(`game: ${currentScript.game}`);
console.log(`author: ${currentScript.author}`);
console.log("files:");
currentScript.files.forEach(file => console.log(`\t${file}`));
console.log(`directory: ${currentScript.directory}`);

class EventListener extends FrameScript {
  onEvent(name, ...args) {
    if (name.includes("UNIT_SPELLCAST_SENT")) { this.onUnitSpellCastSent(name, ...args); }
    //if (name.includes("COMBAT_LOG_EVENT")) { console.log(JSON.stringify(arguments)); }
  }

  /**
   * 
   * @param {string} name 
   * @param {string} token 
   * @param {string} target 
   * @param {WoWGuid} guid 
   * @param {number} id 
   */
  onUnitSpellCastSent(name, token, target, guid, id) {
    console.log(`caster: ${token} target: ${target} guid: ${guid.hash} spell: ${id}`);
  }
}

class Pallas {
  async initialize() {
    this.events = new EventListener;
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
      this.rootBehavior = this.behaviorBuilder.build(this.getSpec(), BehaviorContext.Normal);
    }
  }

  getSpec() {
    if (!me) { return Specialization.Invalid; }
    if (gameFlavor == GameFlavor.Wrath) {
      const spec = me.talents;
      let activeSpecId = Specialization.Invalid;
      let topSpecPts = 0;
      spec.specGroups[spec.activeSpecGroup].tabs.forEach(tab => {
        if (tab.points > topSpecPts) { activeSpecId = tab.id; topSpecPts = tab.points; }
      });
      return activeSpecId;
    }
    else {
      return me.activeSpecId;
    }
  }
}

const pallas = new Pallas;
pallas.initialize().then(_ => console.log('Pallas initialized')).catch(e => console.log(`${e}\n${e.stack}`));
