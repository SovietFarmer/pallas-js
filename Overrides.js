import { WoWUnit } from 'wow';

WoWUnit.prototype.foo = function (bar) {
  console.log(`foo said: ${bar}`);
}

Object.defineProperty(WoWUnit.prototype, 'bar', {
  get() {
    return "bar on " + this.name;
  }
});