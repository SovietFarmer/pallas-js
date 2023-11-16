import { GameFlavor } from 'wow';
import { Behavior, BehaviorContext } from '/Core/Behavior.js';
import * as bt from '/Core/BehaviorTree';
import { common } from '/Core/Common';
import { Specialization } from '/Core/Data/Specialization';
import { me } from '/Core/ObjectManager';
import { spell } from '/Core/Spell';

export class WarriorFuryBehavior extends Behavior {
  context = BehaviorContext.All;
  specialization = Specialization.Warrior.Fury;
  flavor = GameFlavor.Wrath;

  build() {
    return new bt.Selector(
      common.waitForTarget(),
      common.waitForCastOrChannel(),

      spell.cast("Battle Shout", null, () => !(me.getAura("Battle Shout")?.remaining > 15000)),

      common.waitForMeleeRange(),

      spell.cast("Bloodthirst", null, () => me.powerPct > 40),
      spell.cast("Whirlwind", null, () => me.powerPct > 40),
      spell.cast("Execute", null, () => me.target.healthPct < 20),
      spell.cast("Slam", null, () => me.hasVisibleAura("Slam!")),
      spell.cast("Heroic Strike", null, () => me.powerPct > 60),
    );
  }
}