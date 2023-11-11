import { Specialization } from './Data/Specialization';
import { GameFlavor } from 'wow';

const BehaviorContext = {
  None: 0,
  Normal: 1,
  Instance: 2,
  BattleGround: 4,
}
BehaviorContext.All = BehaviorContext.Normal | BehaviorContext.Instance | BehaviorContext.BattleGround;

class Behavior {
  context = BehaviorContext.None;
  specialization = Specialization.Invalid;
  flavor = -1;
}

export { BehaviorContext, Behavior };