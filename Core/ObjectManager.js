import * as wow from 'wow';

/**
 * Same as objMgr.me
 * @type {wow.WoWActivePlayer}
 */
export let me = null;

class ObjectManager {
  /**
   * @type {Array<wow.WoWObject>}
   */
  objects = new Array();

  /**
   * @type {Array<wow.WoWItem>}
   */
  items = new Array();

  /**
   * @type {Array<wow.WoWUnit>}
   */
  units = new Array();

  /**
   * @type {Array<wow.WoWPlayer>}
   */
  players = new Array();

  /**
   * @type {wow.WoWActivePlayer}
   */
  me = null;

  update() {
    const objMgr = new wow.ObjectManager();
    this.objects = objMgr.objects;
    this.items = this.objects.filter(obj => (obj.typeFlag & wow.ObjectTypeFlags.Item) > 0);
    this.units = this.objects.filter(obj => (obj.typeFlag & wow.ObjectTypeFlags.Unit) > 0);
    this.players = this.objects.filter(obj => (obj.typeFlag & wow.ObjectTypeFlags.Player) > 0);
    this.me = this.objects.find(obj => (obj.typeFlag & wow.ObjectTypeFlags.ActivePlayer) > 0);
    me = this.me;
  }
}

export let objMgr = new ObjectManager();