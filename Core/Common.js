import * as bt from './BehaviorTree';
import { me } from './ObjectManager';

class Common {
  waitForTarget() {
    return new bt.Action(() => {
      if (!me.target || !this.validUnit(me.target)) {
        return bt.Status.Success;
      }
      return bt.Status.Failure;
    });
  }

  validUnit(u) {
    if (!me.canAttack(u)) {
      return false;
    }
    if (!u.inCombat && !u.name.includes("Training Dummy")) {
      return false;
    }
    if (u.deadOrGhost) {
      return false;
    }
    if (u.distance > 40) {
      return false;
    }
    if (u.isTapDenied && (!u.target || u.target != me) && !u.name.includes("Training Dummy")) {
      return false;
    }
    return true;
  }

  waitForMeleeRange() {
    return new bt.Action(() => {
      if (me.getDistance(me.target) > me.getMeleeRange(me.target)) {
        return bt.Status.Success;
      }
      return bt.Status.Failure;
    });
  }

  waitForCastOrChannel() {
    return new bt.Selector(
      this.waitForCast(),
      this.waitForChannel(),
    );
  }

  waitForCast() {
    return new bt.Action(() => {
      if (me.isCasting) {
        return bt.Status.Success;
      }
      return bt.Status.Failure;
    })
  }

  waitForChannel() {
    return new bt.Action(() => {
      if (me.isChanneling) {
        return bt.Status.Success;
      }
      return bt.Status.Failure;
    })
  }
}

export let common = new Common();
