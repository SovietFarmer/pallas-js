import { GameFlavor } from 'wow';
import { Behavior, BehaviorContext } from '/Behavior.js'
import * as bt from '/BehaviorTree';
import { common } from '/Common';
import { Specialization } from '/Data/Specialization'
import { spell } from '/Spell';

export class WarriorFuryBehavior extends Behavior {
  context = BehaviorContext.All;
  specialization = Specialization.Warrior.Fury;
  flavor = GameFlavor.Retail;

  build() {
    return new bt.Selector(
      common.waitForTarget(),
      common.waitForCastOrChannel(),

      // shout

      common.waitForMeleeRange(),

      spell.cast("Execute"),
      spell.cast("Rampage"),
      spell.cast("Raging Blow"),
      spell.cast("Bloodbath"),
      spell.cast("Bloodthirst"),
      spell.cast("Whirlwind"),
    );
  }
}