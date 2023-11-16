import { GameFlavor } from 'wow';
import { Behavior, BehaviorContext } from '/Core/Behavior.js'
import * as bt from '/Core/BehaviorTree';
import { common } from '/Core/Common';
import { Specialization } from '/Core/Data/Specialization'
import { spell } from '/Core/Spell';

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