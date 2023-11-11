import { GameFlavor, PowerType } from 'wow';
import { Behavior, BehaviorContext } from '/Behavior.js';
import * as bt from '/BehaviorTree';
import { common } from '/Common';
import { Specialization } from '/Data/Specialization';
import { me } from '/ObjectManager';
import { spell } from '/Spell';

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