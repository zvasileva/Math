import Character from './Character';

export default class Danger extends Character {
  constructor(...params) {
    super(...params);
    this.defence = 40;
    this._attack = 100;
    this._stoned = 0;
  }

  get attack() {
    return this._attack;
  }

  set attack(x) {
    this._attack = Math.round(this._attack * (-(0.1 * x) + 1.1));
    if (this._stoned === 1) {
      this._attack -= Math.round(Math.log2(x) * 5);
    }
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(flag) {
    if (flag === 1) {
      this._stoned = 1;
    } else {
      this._stoned = 0;
    }
  }
}
