export const Status = {
  Success: 0,
  Failure: 1,
  Running: 2
};

export class Composite {
  /**
   * @todo Describe Composite constructor
   */
  constructor() {
  }
}

export class GroupComposite extends Composite {
  /**
   * @todo Describe GroupComposite constructor
   * @param {Composite[]} children
   */
  constructor(children) {
    super();
    this.children = children;
  }

  addChild(child) {
    this.children.push(child);
  }
}

export class Action extends Composite {
  /**
   * @todo Describe Action constructor
   * @param {Function} runner
   */
  constructor(runner) {
    super();
    this.runner = runner;
  }

  process() {
    if (this.runner) {
      return this.runner();
    }
    return Status.Failure;
  }
}

/**
 * Execute child composite only if the condition is met, works similar to an if-statement
 */
export class Decorator extends Composite {
  /**
   * @todo Describe Decorator constructor
   * @param {Function} condition
   * @param {Composite} child
   */
  constructor(condition, child) {
    super();
    this.condition = condition;
    this.child = child;
  }

  process() {
    if (this.condition && this.condition instanceof Function && this.condition()) {
      return this.child.process();
    }
    return Status.Failure;
  }
}

/**
 * Execute each child branch in order until all succeeds in where this branch will also succeed.
 * If any child branch fails this branch will also fail.
 * @todo add Status.Running
 */
export class Sequence extends GroupComposite {
  /**
   * @todo Describe PrioritySelector constructor
   */
  constructor() {
    super(Array.from(arguments));
  }

  process() {
    // process all children returning failure if any of them fails
    for (const child of this.children) {
      child.start?.();
      let status = child.process?.();
      child.stop?.();
      if (status == Status.Failure) {
        return status;
      }
    }
    // all children succeeded
    return Status.Success;
  }
}

/**
 * Execute each child branch in order until one succeeds in where this branch will also succeed.
 * If all child branches fail this branch will also fail.
 * @todo add Status.Running
 */
export class Selector extends GroupComposite {
  /**
   * @todo Describe Selector constructor
   */
  constructor() {
    super(Array.from(arguments));
  }

  process() {
    // process all children returning success if any of them succeeds
    for (const child of this.children) {
      child.start?.();
      let status = child.process?.();
      child.stop?.();
      if (status == Status.Success) {
        return status;
      }
    }
    // none of the children succeeded, return failure
    return Status.Failure;
  }
}