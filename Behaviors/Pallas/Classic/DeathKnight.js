import {GameFlavor} from 'wow';
import {Behavior, BehaviorContext} from '/Behavior.js';
import * as bt from '/BehaviorTree';
import {common} from '/Common';
import {Specialization} from '/Data/Specialization';
import {me} from '/ObjectManager';
import {spell} from '/Spell';

export class DeathKnightBloodBehavior extends Behavior {
    context = BehaviorContext.All;
    specialization = Specialization.DeathKnight.Blood
    flavor = GameFlavor.Wrath;


    build() {
        return new bt.Selector(
            common.waitForTarget(),
            common.waitForCastOrChannel(),

            // shout

            common.waitForMeleeRange(),

            spell.cast("Horn of Winter", null, () => !me.hasVisibleAura("Horn of Winter")),
            spell.cast("Frost Presence", null, () => !me.hasVisibleAura("Frost Presence")),
            spell.cast("Death Strike", null, () => me.healthPct < 60),
            spell.cast("Death and Decay", null, () => true),
            spell.cast("Icy Touch", null, () => !me.target?.hasDebuffByMe("Frost Fever")),
            spell.cast("Plague Strike", null, () =>  !me.target?.hasDebuffByMe("Blood Plague")),
            spell.cast("Death Strike", null, () => true),
            spell.cast("Death Coil", null, () => me.powerPct > 60),
            spell.cast("Blood Boil", null, () => true),
            )}
}
