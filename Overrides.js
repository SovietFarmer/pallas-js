import {MovementFlags, StandStance, WoWSpell, WoWUnit} from 'wow';
import {me} from "./ObjectManager";
import immunes from "./Data/immunes";


// samples

WoWUnit.prototype.foo = function (bar) {
    console.log(`foo said: ${bar}`);
}

Object.defineProperty(WoWUnit.prototype, 'bar', {
    get() {
        return "bar on " + this.name;
    }
});


// unit

/**
 * Checks if the WoWUnit has a specific buff cast by the player.
 *
 * @param buffName The name of the buff to check.
 * @returns {boolean} Returns true if the buff is present, otherwise false.
 */
WoWUnit.prototype.hasBuffByMe = function (buffName) {
  return this.auras.find(aura => aura.spell.name === buffName && aura.hasCaster && aura.caster.isMe) !== undefined;
};

/**
 * Checks if the WoWUnit has a specific debuff cast by the player.
 *
 * @param {string} debuffName - The name of the debuff to check.
 * @returns {boolean} - Returns true if the debuff is present, otherwise false.
 */
WoWUnit.prototype.hasDebuffByMe = function (debuffName) {
    return this.auras.find(aura => aura.name === debuffName && aura.hasCaster && aura.caster.isMe) !== undefined;
};


/**
 * Retrieves an aura by name or ID cast by the player from the WoWUnit.
 *
 * @param {(string|number)} identifier - The name or spellId of the aura to check.
 * @returns {WoWAura|undefined} - Returns the WoWAura if found, otherwise undefined.
 */
WoWUnit.prototype.getAuraByMe = function (identifier) {
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
};

// Create a mask for movement-related flags using the globally available MovementFlags enum
const movingMask =
    MovementFlags.Forward |
    MovementFlags.Backward |
    MovementFlags.StrafeLeft |
    MovementFlags.StrafeRight |
    MovementFlags.Falling |
    MovementFlags.Ascending |
    MovementFlags.Descending;

/**
 * Determines if the WoWUnit is moving.
 *
 * @returns {boolean} - Returns true if the unit is moving, otherwise false.
 */
WoWUnit.prototype.isMoving = function () {
    return (this.movementFlags & movingMask) > 0;
};

/**
 * Checks if the WoWUnit is sitting.
 *
 * @returns {boolean} - Returns true if the unit is in a sitting stance, otherwise false.
 */
WoWUnit.prototype.isSitting = function() {
    return this.standStance === StandStance.Sit;
};

/**
 * Checks if the WoWUnit is in combat with the player or the player's pet.
 * TODO - DOESNT WORK
 *
 * @returns {boolean} - Returns true if the unit is in combat with the player or their pet, otherwise false.
 */
WoWUnit.prototype.inCombatWithMe = function() {
    return this.threatTable.some(v => v.guid === me.guid || (me.pet && me.pet.guid === v.guid));
};

/**
 * Checks if the WoWUnit is swimming.
 * TODO - DOESNT WORK
 *
 * @returns {boolean} - Returns true if the unit is swimming, otherwise false.
 */
WoWUnit.prototype.isSwimming = function() {
    return (this.movementFlags & MovementFlags.Swimming) > 0;
};

/**
 * Checks if the WoWUnit is stunned.
 * TODO - untested
 *
 * @returns {boolean} - Returns true if the unit is stunned, otherwise false.
 */
WoWUnit.prototype.isStunned = function() {
    return (this.unitFlags & UnitFlags.Stunned) > 0;
};

/**
 * Checks if the WoWUnit is rooted (unable to move).
 *
 * @returns {boolean} - Returns true if the unit is rooted, otherwise false.
 */
WoWUnit.prototype.isRooted = function() {
    return (this.movementFlags & MovementFlags.Root) > 0;
};

/**
 * Checks if the WoWUnit is immune to damage.
 * It checks both specific damage immunity auras and general immunity flags.
 * TODO - untested
 *
 * @returns {boolean} - Returns true if the unit is immune to damage, otherwise false.
 */
WoWUnit.prototype.isImmune = function() {
    if (immunes.damage.some(immune => this.hasAura(immune))) {
        return true;
    }
    return (this.unitFlags & UnitFlags.Unk31) > 0 || (this.unitFlags & UnitFlags.ImmuneToPC) > 0;
};


/**
 * Checks if the WoWUnit is immune to healing.
 * It checks for specific healing immunity auras.
 * TODO - untested
 *
 * @returns {boolean} - Returns true if the unit is immune to healing, otherwise false.
 */
WoWUnit.prototype.isHealImmune = function() {
    return immunes.heal.some(immune => this.hasAura(immune));
};
