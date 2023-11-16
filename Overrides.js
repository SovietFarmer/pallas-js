import { GameFlavor, MovementFlags, StandStance, WoWActivePlayer, WoWUnit, gameFlavor } from 'wow';
import { Specialization } from './Data/Specialization';
import immunes from "./Data/immunes";
import { me } from "./ObjectManager";

// Create a mask for movement-related flags using the globally available MovementFlags enum
const movingMask =
  MovementFlags.Forward |
  MovementFlags.Backward |
  MovementFlags.StrafeLeft |
  MovementFlags.StrafeRight |
  MovementFlags.Falling |
  MovementFlags.Ascending |
  MovementFlags.Descending;

// unit
Object.defineProperties(WoWUnit.prototype, {
  /**
   * Checks if the WoWUnit has a specific buff cast by the player.
   *
   * @param {string} name The name of the buff to check.
   * @returns {boolean} Returns true if the buff is present, otherwise false.
   */
  hasBuffByMe: {
    value: function (name) {
      return this.auras.find(aura => aura.spell.name === name && aura.hasCaster && aura.caster.isMe) !== undefined;
    }
  },

  /**
   * Checks if the WoWUnit has a specific debuff cast by the player.
   *
   * @param {string} debuffName - The name of the debuff to check.
   * @returns {boolean} - Returns true if the debuff is present, otherwise false.
   */
  hasDebuffByMe: {
    value: function (name) {
      return this.auras.find(aura => aura.name === name && aura.hasCaster && aura.caster.isMe) !== undefined;
    }
  },

  /**
   * Retrieves an aura by name or ID cast by the player from the WoWUnit.
   *
   * @param {(string|number)} identifier - The name or spellId of the aura to check.
   * @returns {WoWAura|undefined} - Returns the WoWAura if found, otherwise undefined.
   */
  getAuraByMe: {
    value: function (identifier) {
      const auras = this.isActivePlayer ? this.visibleAuras : this.auras;
      const typeOfIdentifier = typeof identifier;

      for (const element of auras) {
        const aura = element;
        if (((typeOfIdentifier === "string" && aura.name === identifier) ||
          (typeOfIdentifier === "number" && aura.id === identifier)) &&
          aura.caster && aura.caster.isMe) {
          return aura;
        }
      }
    }
  },

  /**
   * Determines if the WoWUnit is moving.
   *
   * @returns {boolean} - Returns true if the unit is moving, otherwise false.
   */
  isMoving: {
    get() {
      return (this.movementFlags & movingMask) > 0;
    }
  },

  /**
   * Checks if the WoWUnit is swimming.
   * @todo - DOESNT WORK
   * @returns {boolean} - Returns true if the unit is swimming, otherwise false.
   */
  isSwimming: {
    get() {
      return (this.movementFlags & MovementFlags.Swimming) > 0;
    }
  },

  /**
   * Checks if the WoWUnit is rooted (unable to move).
   *
   * @returns {boolean} - Returns true if the unit is rooted, otherwise false.
   */
  isRooted: {
    get() {
      return (this.movementFlags & MovementFlags.Root) > 0;
    }
  },

  /**
   * Checks if the WoWUnit is sitting.
   *
   * @returns {boolean} - Returns true if the unit is in a sitting stance, otherwise false.
   */
  isSitting: {
    get() {
      return this.standStance === StandStance.Sit;
    }
  },

  /**
   * Checks if the WoWUnit is stunned.
   * @todo - untested
   * @returns {boolean} - Returns true if the unit is stunned, otherwise false.
   */
  isStunned: {
    get() {
      return (this.unitFlags & UnitFlags.Stunned) > 0;
    }
  },

  /**
   * Checks if the WoWUnit is immune to damage.
   * It checks both specific damage immunity auras and general immunity flags.
   * @todo - untested
   * @returns {boolean} - Returns true if the unit is immune to damage, otherwise false.
   */
  isImmune: {
    get() {
      if (immunes.damage.some(immune => this.hasAura(immune))) {
        return true;
      }
      return (this.unitFlags & UnitFlags.Unk31) > 0 || (this.unitFlags & UnitFlags.ImmuneToPC) > 0;
    }
  },

  /**
   * Checks if the WoWUnit is immune to healing.
   * It checks for specific healing immunity auras.
   * @todo - untested
   * @returns {boolean} - Returns true if the unit is immune to healing, otherwise false.
   */
  isHealImmune: {
    get() {
      return immunes.heal.some(immune => this.hasAura(immune));
    }
  },

  /**
   * Checks if the WoWUnit is in combat with the player or the player's pet.
   * @todo - DOESNT WORK
   * @returns {boolean} - Returns true if the unit is in combat with the player or their pet, otherwise false.
   */
  inCombatWithMe: {
    get() {
      return this.threatTable.some(v => v.guid === me.guid || (me.pet && me.pet.guid === v.guid));
    }
  },
});

Object.defineProperty(WoWActivePlayer.prototype, 'specId', {
  get() {
    if (gameFlavor == GameFlavor.Wrath) {
      const spec = this.talents;
      let activeSpecId = Specialization.Invalid;
      let topSpecPts = 0;
      spec.specGroups[spec.activeSpecGroup].tabs.forEach(tab => {
        if (tab.points > topSpecPts) { activeSpecId = tab.id; topSpecPts = tab.points; }
      });
      return activeSpecId;
    }
    else {
      return this.activeSpecId;
    }
  }
})