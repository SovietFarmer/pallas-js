// @ts-nocheck
declare module "wow" {
  declare enum GuidType {
    Null,
    Uniq,
    Player,
    Item,
    WorldTransaction,
    StaticDoor,
    Transport,
    Conversation,
    Creature,
    Vehicle,
    Pet,
    GameObject,
    DynamicObject,
    AreaTrigger,
    Corpse,
    LootObject,
    SceneObject,
    Scenario,
    AIGroup,
    DynamicDoor,
    ClientActor,
    Vignette,
    CallForHelp,
    AIResource,
    AILock,
    AILockTicket,
    ChatChannel,
    Party,
    Guild,
    WowAccount,
    BNetAccount,
    GMTask,
    MobileSession,
    RaidGroup,
    Spell,
    Mail,
    WebObj,
    LFGObject,
    LFGList,
    UserRouter,
    PVPQueueGroup,
    UserClient,
    PetBattle,
    UniqUserClient,
    BattlePet,
    CommerceObj,
    ClientSession,
    Cast,
    ClientConnection,
    ClubFinder,
    ToolsClient,
    WorldLayer,
    ArenaTeam,
  }

  declare enum ObjectType {
    Object,
    Item,
    Container,
    AzeriteEmpoweredItem,
    AzeriteItem,
    Unit,
    Player,
    ActivePlayer,
    GameObject,
    DynamicObject,
    Corpse,
    AreaTrigger,
    Scene,
    Conversation,
    AiGroup,
    Scenario,
    Loot,
    Invalid,
  }

  declare enum ObjectTypeFlags {
    Object,
    Item,
    Container,
    AzeriteEmpoweredItem,
    AzeriteItem,
    Unit,
    Player,
    ActivePlayer,
    GameObject,
    DynamicObject,
    Corpse,
    AreaTrigger,
    Scene,
    Conversation,
    AiGroup,
    Scenario,
    Loot,
    Invalid,
  }

  declare enum ObjectDynamicFlags {
    None,
    Lootable,
    TapDenied,
  }

  declare class WoWGuid {
    hash: number;
    low: number;
    high: number;
    type: number;
    typeName: string;
    realmId: number;
    mapId: number;
    entryId: number;
    subType: number;

    isEmpty: boolean;
    isCreature: boolean;
    isPet: boolean;
    isVehicle: boolean;
    isCreatureOrPet: boolean;
    isCreatureOrVehicle: boolean;
    isAnyCreature: boolean;
    isPlayer: boolean;
    isUnit: boolean;
    isItem: boolean;
    isGameObject: boolean;
    isDynamicObject: boolean;
    isCorpse: boolean;
    isAreaTrigger: boolean;
    isMOTransport: boolean;
    isAnyGameObject: boolean;
    isParty: boolean;
    isGuild: boolean;
    isSceneObject: boolean;
    isConversation: boolean;
    isCast: boolean;
  }

  declare class WoWObject {
    type: ObjectType;
    typeName: string;
    typeFlag: ObjectTypeFlags;
    entryId: number;
    guid: WoWGuid;
    flags: number;
    dynamicFlags: ObjectDynamicFlags;
    position: { x: number, y: number, z: number };
    facing: number;
    scale: number;
    displayHeight: number;
    name: string;
    nameUnsafe: string;

    isMe: boolean;
    isItem: boolean;
    isContainer: boolean;
    isUnit: boolean;
    isPlayer: boolean;
    isActivePlayer: boolean;
    isGameObject: boolean;
    isCorpse: boolean;

    toObject: WoWObject;
    toItem: WoWItem;
    toContainer: WoWContainer;
    toPlayer: WoWPlayer;
    toActivePlayer: WoWActivePlayer;
    toGameObject: WoWGameObject;
    toDynamicObject: WoWDynamicObject;
    toCorpse: WoWCorpse;

    interact(): void;
  }

  declare enum ItemQuality {
    Poor,
    Common,
    Uncommon,
    Rare,
    Epic,
    Legendary,
    Artifact,
    Heirloom,
    PayToWin, // Also known as WoWToken
  }

  declare class WoWItem extends WoWObject {
    quality: ItemQuality;
    hasDurability: boolean;
    durability: number;
    durabilityMax: number;
    isBroken: boolean;
    count: number;
    spellId: number;
    spell: WoWSpell;
  }

  declare class WoWContainer extends WoWItem {

  }

  declare enum SpellInterruptFlags {
    Unk1,
    Unk2,
    Unk4,
    Combat,
    Unk10,
    Unk20,
    Unk40,
    Unk80,
    Unk100,
    Unk200,
    Unk400,
    Unk800,
  }

  declare enum UnitThreatStatus {
    NoThreat,
    HigherThreat,
    InsecurelyTanking,
    Tanking,
  }

  declare enum ShapeshiftForm {
    Normal,
    Cat,
    TreeOfLife,
    Travel,
    Aqua,
    Bear,
    Ambient,
    Ghoul,
    DireBear,
    CreatureBear,
    CreatureCat,
    GhostWolf,
    BattleStance,
    DefensiveStance,
    BerserkerStance,
    EpicFlightForm,
    Shadow,
    Stealth,
    Moonkin,
    SpiritOfRedemption,
  }

  declare enum StandStance {
    Stand,
    Sit,
    SittingInChair,
    Sleeping,
    SittingInLowChair,
    SittingInMediumChair,
    SittingInHighChair,
    Dead,
    Kneeling,
    Type9,
  }

  declare enum PvpState {
    None,
    Pvp,
    FFAPvp,
    InPvpSanctuary,
  }

  declare enum PowerType {
    Health,
    None,
    Mana,
    Rage,
    Focus,
    Energy,
    ComboPoints,
    Runes,
    RunicPower,
    SoulShards,
    LunarPower,
    HolyPower,
    Alternate,
    Maelstrom,
    Chi,
    Insanity,
    Obsolete,
    Obsolete2,
    ArcaneCharges,
    Fury,
    Pain,
    NumPowerTypes,
  }

  declare enum ClassType {
    None,
    Warrior,
    Paladin,
    Hunter,
    Rogue,
    Priest,
    DeathKnight,
    Shaman,
    Mage,
    Warlock,
    Monk,
    Druid,
    DemonHunter,
    Evoker,
  }

  declare enum RaceType {
    None,
    Human,
    Orc,
    Dwarf,
    NightElf,
    Undead,
    Tauren,
    Gnome,
    Troll,
    Goblin,
    BloodElf,
    Draenei,
    Worgen,
    Pandaren,
    PandarenAlliance,
    PandarenHorde,
  }

  declare enum GenderType {
    Male,
    Female,
    Unknown,
  }

  declare enum StateFlags {
    None,
    AlwaysStand,
    Sneaking,
    UnTrackable,
  }

  declare enum EquipSlot {
    Head,
    Neck,
    Shoulders,
    Body,
    Chest,
    Waist,
    Legs,
    Feet,
    Wrists,
    Hands,
    Finger1,
    Finger2,
    Trinket1,
    Trinket2,
    Back,
    MainHand,
    OffHand,
    Ranged,
    Tabard,
  }

  declare enum UnitDynamicFlags {
    Unk1,
    Visibility,
    Lootable,
  }

  declare enum UnitFlags {
    ServerControlled,
    NonAttackable,
    RemoveClientControl,
    PvpAttackable,
    Rename,
    Preperation,
    Unk6,
    NotAttackable1,
    ImmuneToPC,
    ImmuneToNPC,
    Looting,
    PetInCombat,
    Pvp,
    Silenced,
    CannotSwim,
    Unk15,
    Unk16,
    Pacified,
    Stunned,
    InCombat,
    TaxiFlight,
    Disarmed,
    Confused,
    Fleeing,
    PlayerControlled,
    NotSelectable,
    Skinnable,
    Mount,
    Unk28,
    Unk29,
    Sheathe,
    Unk31,
  }

  declare enum UnitFlags2 {
    FeignDeath,
    Unk1,
    IgnoreReputation,
    ComprehendLang,
    MirrorImage,
    InstantlyAppearModel,
    ForceMovement,
    DisarmOffhand,
    DisablePredStats,
    AllowChangingTalents,
    DisarmRanged,
    RegeneratePower,
    RestrictPartyInteraction,
    PreventSpellClick,
    AllowEnemyInteract,
    DisableTurn,
    Unk2,
    PlayDeathAnim,
    AllowCheatSpells,
    Unk3,
    Unk4,
    Unk5,
    Unk6,
    NoActions,
  }

  declare enum UnitFlags3 {
    Unk1,
    Unk2,
    Unk3,
    Unk4,
    Unk5,
    Unk6,
    Unk7,
    Unk8,
    Unk9,
    Unk10,
    Unk11,
    Unk12,
    Unk13,
    Unk14,
    Unk15,
    Unk16,
    Unk17,
    Unk18,
    Unk19,
    Unk20,
  }

  declare enum NpcFlags {
    Gossip,
    Questgiver,
    Unk1,
    Unk2,
    Trainer,
    TrainerClass,
    TrainerProfession,
    Vendor,
    VendorAmmo,
    VendorFood,
    VendorPoison,
    VendorReagent,
    Repair,
    Flightmaster,
    Spirithealer,
    Spiritguide,
    Innkeeper,
    Banker,
    Petitioner,
    TabardDesigner,
    Battlemaster,
    Auctioneer,
    Stablemaster,
    GuildBanker,
    Spellclick,
    PlayerVehicle,
    Mailbox,
    ArtifactPowerRespec,
    Transmogrifier,
    Vaultkeeper,
    WildBattlePet,
    BlackMarket,
    ItemUpgradeMaster,
    GarrisonArchitect,
    Steering,
    Unk3,
    ShipmentCrafter,
    GarrisonMissionNpc,
    TradeskillNpc,
    BlackMarketView,
    Unk4,
    Unk5,
    ContributionCollector,
  }

  declare enum MovementFlags {
    Forward,
    Backward,
    StrafeLeft,
    StrafeRight,
    Left,
    Right,
    PitchUp,
    PitchDown,
    Walking,
    DisableGravity,
    Root,
    Falling,
    FallingFar,
    PendingStop,
    PendingStrafeStop,
    PendingForward,
    PendingBackward,
    PendingStrafeLeft,
    PendingStrafeRight,
    PendingRoot,
    Swimming,
    Ascending,
    Descending,
    CanFly,
    Flying,
    SplineElevation,
    Waterwalking,
    FallingSlow,
    Hover,
    DisableCollision,
  }

  declare enum UnitReaction {
    Hated,
    Hostile,
    Unfriendly,
    Neutral,
    Friendly,
    Honored,
    Revered,
    Exalted,
  }

  declare class SpellInfo {
    shapeshiftFlags: number;
    autoAttackTarget: WoWGuid;
    interruptFlags: SpellInterruptFlags;
    castGuid: WoWGuid;
    castSpellId: number;
    castSpellVisual: number;
    targetGuid1: WoWGuid;
    cast: number;
    castVisual: number;
    gameObjectGuid: WoWGuid;
    casterGuid: WoWGuid;
    castStart: number;
    castEnd: number;
    channelSpellId: number;
    channelSpellVisual: number;
    channelStart: number;
    channelEnd: number;
    empowerLevelCurrent: number;
    empowerLevelMax: number;
    empowerLevelPrevious: number;
  }

  declare class UnitThreatEntry {
    guid: WoWGuid;
    status: UnitThreatStatus;
    rawPct: number;
    rawValue: number;
  }

  declare class WoWUnit extends WoWObject {
    unitFlags: UnitFlags;
    unitFlags2: UnitFlags2;
    unitFlags3: UnitFlags3;
    npcFlags: NpcFlags;
    movementFlags: MovementFlags;

    inCombat: number;
    boundingRadius: number;
    combatReach: number;

    race: RaceType;
    raceName: string;
    class: ClassType;
    className: string;
    gender: GenderType;
    genderName: string;
    classification: number;
    creatureFamily: number;
    creatureType: number;

    level: number;
    health: number;
    healthBase: number;
    healthMax: number;
    healthPct: number;
    dead: boolean;
    deadOrGhost: boolean;

    power: number;
    powerMax: number;
    powerPct: number;
    powerType: PowerType;
    powerName: string;

    powerByType(power: PowerType): number;
    powerMaxByType(power: PowerType): number;
    powerPctByType(power: PowerType): number;

    target?: WoWUnit; // TODO(ejt): WoWUnit, WoWPlayer, WoWActivePlayer
    pet?: WoWUnit;

    mountDisplayId: number;
    isMounted: boolean;
    standStance: StandStance;
    emoteStance: number;
    sheateState: number;
    shapeshiftForm: ShapeshiftForm;

    strength: number;
    strengthModPos: number;
    strengthModNeg: number;
    agility: number;
    agilityModPos: number;
    agilityModNeg: number;
    stamina: number;
    staminaModPos: number;
    staminaModNeg: number;
    intellect: number;
    intellectModPos: number;
    intellectModNeg: number;
    spirit: number;
    spiritModPos: number;
    spiritModNeg: number;
    armor: number;
    attackPower: number;
    attackPowerModPos: number;
    attackPowerModNeg: number;
    attackPowerMultiplier: number;
    attackPowerRanged: number;
    attackPowerRangedModPos: number;
    attackPowerRangedModNeg: number;
    attackPowerRangedMultiplier: number;

    damageMin: number;
    damageMax: number;
    damageAvg: number;
    damageOffHandMin: number;
    damageOffHandMax: number;
    damageOffHandAvg: number;
    damageRangedMin: number;
    damageRangedMax: number;
    damageRangedAvg: number;

    baseAttackSpeed: number;
    baseOffHandAttackSpeed: number;
    baseRangedAttackSpeed: number;

    hasteMod: number;
    hasteRangedMod: number;
    hasteSpellMod: number;
    castSpeedMod: number;
    hasteRegenMod: number;
    timeRateMod: number;

    currentSpeed: number;
    groundSpeed: number;
    flightSpeed: number;
    swimSpeed: number;

    isLootable: boolean;
    isTapDenied: boolean;

    getReaction(unit?: WoWUnit): UnitReaction;
    isEnemy: boolean;
    canAttack(unit?: WoWUnit): boolean;
    isAttackable: boolean;
    isRelatedToActiveQuest: boolean;

    auras: Array<WoWAura>;
    visibleAuras: Array<WoWAura>;
    raidAuras: Array<WoWAura>;
    getAura(spellid: number): WoWAura?;
    getVisibleAura(spellid: number): WoWAura?;
    getRaidAura(spellid: number): WoWAura?;
    hasAura(spellid: number): boolean;
    hasVisibleAura(spellid: number): boolean;
    hasRaidAura(spellid: number): boolean;

    isCasting: boolean;
    isChanneling: boolean;
    isCastingOrChanneling: boolean;
    isInterruptible: boolean;
    currentCast?: WoWSpell;
    currentChannel?: WoWSpell;
    currentSpell?: WoWSpell;
    spellInfo: SpellInfo;

    aggro: boolean;
    tankTarget?: WoWUnit | WoWPlayer | WoWActivePlayer;
    threatTable: Array<ThreatTable>;
    getThreatEntry(guid: WoWGuid): ThreatTableEntry;

    getDistance(o: WoWObject): number;
    getMeleeRange(o: WoWUnit): number;
    inMeleeRange(o: WoWUnit): boolean;
    getInteractRange(o: WoWUnit): number;
    inInteractRange(o: WoWUnit): boolean;
  }

  declare enum PlayerFlags {
    GroupLeader,
    Afk,
    Dnd,
    Gm,
    Ghost,
    Resting,
    VoiceChat,
    Unk7,
    ContestedPvp,
    InPvp,
    HideHelm,
    HideCloak,
    PlayedLongTime,
    PlayedTooLong,
    IsOutOfBounds,
    Developer,
    Unk16,
    TaxiBenchmark,
    PvpTimer,
    Uber,
    Unk20,
    Unk21,
    Commentator2,
    AllowOnlyAbility,
    PetBattlesUnlocked,
    NoXpGain,
    Unk26,
    AutoDeclineGuild,
    GuildLevelEnabled,
    VoidUnlocked,
    Mentor,
    Unk31,
  }

  declare enum PlayerFlagsEx {
    ReagentBankUnlocked,
    MercenaryMode,
    ArtifactForgeCheat,
  }

  declare class WoWPlayer extends WoWUnit {
    playerFlags: PlayerFlags;
    playerFlagsEx: PlayerFlagsEx;
  }

  declare class WoWActivePlayer extends WoWPlayer {
    constructor(): WoWActivePlayer | undefined;

    equipment: Array<WoWItem?>;
    totems: Array<{ index: number, guid: WoWGuid, name: string, duration: number, start: number }>;

    // Wrath only
    talents: {
      activeSpecGroup: number,
      numSpecGroups: number,
      unspentTalentPoints: number,
      specGroups: Array<{
        unspentPoints: number,
        role: number,
        tabs: Array<{
          id: number,
          name: string,
          points: number,
        }>
      }>
    }

    // Dragonflight only
    activeSpecId: number;

    lastHardwareAction: number;

    activePet: WoWUnit;
    isPetActive: boolean;
    isPetAttacking: boolean;
    isPetFollowing: boolean;
    petMode: number;
    setPetAttack(target: WoWUnit): undefined;
    setPetFollow(): undefined;
    setPetWait(): undefined;
    setPetAggressive(): undefined;
    setPetDefensive(): undefined;
    setPetPassive(): undefined;

    getRuneCooldown(index: number): number;
    getRuneType(index: number): number;

    toggleAttack(): boolean;
    startAttack(target: WoWUnit): boolean;
    stopAttack(): undefined;
    attackTarget(): undefined;
    isAttacking(): boolean;
    stopCasting(): boolean;
  }

  declare enum AuraFlags {
    NoCaster,
    Positive,
    Duration,
    Scalable,
    Negative,
    Unknown20,
    Unknown40,
    Unknown80,
    Unknown100,
    Unknown200,
    Unknown400,
    Unknown800,
  }

  declare enum DispelType {
    None,
    Magic,
    Curse,
    Disease,
    Poison,
    Stealth,
    Invisibility,
    All,
    Enrage,
  }

  declare class WoWAura {
    id: number;
    name: string;
    stacks: number;
    flags: AuraFlags;
    dispelType: DispelType;

    hasDuration: boolean;
    duration: number;
    expire: number;
    remaining: number;

    isBuff: boolean;
    isDebuff: boolean;
    isBossDebuff: boolean;
    isScalable: boolean;

    hasCaster: boolean;
    caster?: WoWUnit;
    spell: WoWSpell;
  }

  declare class WoWSpell {
    id: number;
    overrideId: number;
    slot: number;
    name: string;
    subText: string;
    castTime: number;
    baseMinRange: number;
    baseMaxRange: number;
    rank: number;
    isKnown: boolean;
    isPet: boolean;

    isAutoRepeat: boolean;
    isActive: boolean;
    isTrade: boolean;
    isPassive: boolean;
    isHelpful: boolean;
    isHarmful: boolean;

    isReady: boolean;
    range: { min: number, max: number };
    cooldown: { duration: number; start: number; active: number; modRate: number; ready: boolean; }

    cast(target: WoWUnit | wector.Vec3): undefined;
  }

  declare class WoWSpellBook {
    spells: Array<WoWSpell>;
    petSpells: Array<WoWSpell>;

    getSpellByName(name: string): WoWSpell?;
  }

  declare class ObjectManager {
    objects: Array<WoWObject>;

    mapId: number;
  }

  declare class TraceLineResult {
    hit: wector.Vec3;
    distance: number;
  }

  declare class World {
    traceLine(from: wector.Vec3, to: wector.Vec3, flags: TraceLineHitFlags): boolean;
    traceLineWithResult(from: wector.Vec3, to: wector.Vec3, flags: TraceLineHitFlags): TraceLineResult;
  }

  declare class Camera {
    origin: wector.Vec3;
    position: wector.Vec3;
    rotation: number;
    fieldOfView: number;
    controllerGuid: WoWGuid;
    distance: number;
    distanceMax: number;
    distanceOrigin: number;
    acceleration: number;
    pitch: number;

    worldPointToScreenPoint(wp: Vec3): Vec2?;
  }

  declare class WorldFrame {
    camera: Camera;
  }

  declare enum GroupType {
    Home,
    Instance,
  }

  declare enum GroupFlags {
    None,
    Raid,
    Guild,
  }

  declare enum LootMethod {
    FreeForAll,
    RoundRobin,
    MasterLoot,
    Group,
    NeedBeforeGreed,
  }

  declare enum GroupAssignment {
    None,
    MainTank,
    MainAssist,
  }

  declare enum GroupRank {
    None,
    Assist,
    Leader,
  }

  declare enum GroupReady {
    None,
    NotReady,
    Ready,
  }

  declare class PartyMember {
    partyIndex: number;
    assignment: GroupAssignment;
    combatRole: number;
    rank: GroupRank;
    readyStatus: GroupReady;
    guid: WoWGuid;
  }

  declare class Party {
    inGroup: boolean;
    flags: GroupFlags;
    isParty: boolean;
    isRaid: boolean;
    lootMethod: LootMethod;
    lootThreshold: number;
    masterLooterGuid: WoWGuid;
    isReadyCheck: boolean;
    readyCheckEnd: number;

    getMemberByIndex(index: number): PartyMember?;
    getMemberByGuid(guid: WoWGuid): PartyMember?;
    members: Array<PartyMember?>;
    memberCount: number;

    getPartyMemberByIndex(index: number): PartyMember?;
    getPartyMemberByGuid(guid: WoWGuid): PartyMember?;
    partyMembers: Array<PartyMember?>;
    partyMemberCount: number;
  }

  declare class PartyInfo {
    constructor(): PartyInfo;

    homeGroup: Party;
    instanceGroup: Party;
    activeGroup: Party;
  }

  declare class FrameScript {
    onEvent(name: string, ...args): void;
  }

  declare enum GameState {
    None,
    IsConnecting,
    InCinematic,
    GameMovieFinished,
    IsReloadingUI,
  }

  declare class GameUI {
    constructor(): GameUI;

    state: GameState;
    zoneText: string;
    subZoneText: string;
    minimapZoneText: string;
    lastErrorString: string;
    cursorItem: WoWGuid;
    cursorItemContainer: WoWGuid;
    areaID: number;
    subZoneID: number;
    repopTime: number;
    deadNoRepopTimer: boolean;
    corpseInRange: number;
    corpseMapID: number;
    corpsePosition: wector.Vec3;
  }

  declare enum GameFlavor {
    Wrath,
    Retail
  }

  gameFlavor: GameFlavor;
}
