import { GameFlavor } from 'wow';
import { Behavior, BehaviorContext } from '/Behavior.js';
import * as bt from '/BehaviorTree';
import { common } from '/Common';
import { Specialization } from '/Data/Specialization';
import { me } from '/ObjectManager';
import { spell } from '/Spell';

export class WarriorFuryBehavior extends Behavior {
  context = BehaviorContext.All;
  specialization = Specialization.Warrior.Fury;
  flavor = GameFlavor.Wrath;

  build() {
    return new bt.Selector(
      common.waitForTarget(),
      common.waitForCastOrChannel(),

      // shout

      common.waitForMeleeRange(),

      spell.cast("Bloodthirst", null, () => me.powerPct > 40),
      spell.cast("Whirlwind", null, () => me.powerPct > 40),
      spell.cast("Execute", null, () => me.target.healthPct < 20),
      spell.cast("Slam", null, () => me.hasVisibleAura("Slam!")),
      spell.cast("Heroic Strike", null, () => me.powerPct > 60),
    );
  }
}