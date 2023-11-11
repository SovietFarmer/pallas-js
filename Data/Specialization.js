import { gameFlavor, GameFlavor } from 'wow'

let Specialization = null;

switch (gameFlavor) {
  case GameFlavor.Wrath:
    Specialization = {
      None: 0,

      DeathKnight: {
        Blood: 398,
        Frost: 399,
        Unholy: 400,
      },
      Druid: {
        Balance: 283,
        Feral: 281,
        Restoration: 282,
      },
      Hunter: {
        BeastMastery: 361,
        Marksmanship: 363,
        Survival: 362,
      },
      Mage: {
        Arcane: 81,
        Fire: 41,
        Frost: 61,
      },
      Paladin: {
        Holy: 382,
        Protection: 383,
        Retribution: 381,
      },
      Priest: {
        Discipline: 201,
        Holy: 202,
        Shadow: 203,
      },
      Rogue: {
        Assassination: 182,
        Combat: 181,
        Sublety: 183,
      },
      Shaman: {
        Elemental: 261,
        Enhancement: 263,
        Restoration: 262,
      },
      Warlock: {
        Affliction: 302,
        Demonology: 303,
        Destruction: 301,
      },
      Warrior: {
        Arms: 161,
        Fury: 164,
        Protection: 163,
      }
    };
    break;

  case GameFlavor.Retail:
    Specialization = {
      None: 0,

      DeathKnight: {
        Blood: 250,
        Frost: 251,
        Unholy: 252,
        Initial: 1455,
      },
      DemonHunter: {
        Havoc: 577,
        Vengeance: 581,
        Initial: 1456,
      },
      Druid: {
        Balance: 102,
        Feral: 103,
        Guardian: 104,
        Restoration: 105,
        Initial: 1447,
      },
      Evoker: {
        Devastation: 1467,
        Preservation: 1468,
        Initial: 1465,
      },
      Hunter: {
        BeastMastery: 253,
        Marksmanship: 254,
        Survival: 255,
        Initial: 1448,
      },
      Mage: {
        Arcane: 62,
        Fire: 63,
        Frost: 64,
        Initial: 1449,
      },
      Monk: {
        Brewmaster: 268,
        Mistweaver: 270,
        Windwalker: 269,
        Initial: 1450,
      },
      Paladin: {
        Holy: 65,
        Protection: 66,
        Retribution: 70,
        Initial: 1451,
      },
      Priest: {
        Discipline: 256,
        Holy: 257,
        Shadow: 258,
        Initial: 1452,
      },
      Rogue: {
        Assassination: 259,
        Combat: 260,
        Sublety: 261,
        Initial: 1453,
      },
      Shaman: {
        Elemental: 262,
        Enhancement: 263,
        Restoration: 264,
        Initial: 1444,
      },
      Warlock: {
        Affliction: 265,
        Demonology: 266,
        Destruction: 267,
        Initial: 1454,
      },
      Warrior: {
        Arms: 71,
        Fury: 72,
        Protection: 73,
        Initial: 1446,
      }
    };
    break;
}

// Special specializations used by Pallas
Specialization.Invalid = -1;
Specialization.None = 0;

export { Specialization };
