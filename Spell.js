import { WoWSpell, WoWSpellBook } from 'wow';
import * as bt from './BehaviorTree';
import { me } from '/ObjectManager';

class Spell {
  cast(name, onUnit = null, requirements = null) {
    return new bt.Sequence(
      // cast the spell
      new bt.Action(() => {
        if (requirements && !requirements()) {
          return bt.Status.Failure;
        }

        const spellBook = new WoWSpellBook();
        const spell = spellBook.getSpellByName(name);
        if (!spell) {
          console.log("failed to find spell " + spell.name);
          return bt.Status.Failure;
        }

        if (!this.canCast(spell)) {
          return bt.Status.Failure;
        }

        if (!this.castPrimitive(spell)) {
          return bt.Status.Failure;
        }

        return bt.Status.Success;
      }),

      // output diagnostics
      new bt.Action(() => {
        console.log(`Cast ${name}`);
        return bt.Status.Success;
      }),

      // wait for global cooldown or cast/channel
    );
  }

  /**
   * 
   * @param {WoWSpell} spell
   */
  canCast(spell) {
    // spell known and exists in spell book?
    if (!spell.isKnown && spell.slot > 0) {
      return false;
    }
    // spell ready?
    if (!spell.isReady) {
      return false;
    }
    // is the spell active? (ie. Heroic Strike is queued)
    if (spell.isActive) {
      return false;
    }
    // spell has cast time and me is moving?
    //if (spell.castTime > 0 && me.isMoving) {
    //  return false;
    //}
    return true;
  }

  /**
   * 
   * @param {WoWSpell} spell
   * @returns
   */
  castPrimitive(spell) {
    spell.cast(me.target);
    return true;
  }
}

export let spell = new Spell();