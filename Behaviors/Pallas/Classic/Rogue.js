import { GameFlavor, PowerType } from 'wow';
import { Behavior, BehaviorContext } from '/Core/Behavior.js';
import * as bt from '/Core/BehaviorTree';
import { common } from '/Core/Common';
import { Specialization } from '/Core/Data/Specialization';
import { me } from '/Core/ObjectManager';
import { spell } from '/Core/Spell';

export class RogueCombatBehavior extends Behavior {
  context = BehaviorContext.All;
  specialization = Specialization.Rogue.Combat;
  flavor = GameFlavor.Wrath;

  build() {
    return new bt.Selector(
      common.waitForTarget(),
      common.waitForCastOrChannel(),
      common.waitForMeleeRange(),

      spell.cast("Slice and Dice", null, () => me.power > 40 && me.powerByType(PowerType.Obsolete) >= 1),
      spell.cast("Sinister Strike"),
    );
  }
}