import Character from './Character';

export default class Danger extends Character {
  constructor(...params) {
    super(...params);
    this.defence = 40;
    this._attack = 100;
  }

  get attack() {
    return this._attack;
  }

  set attack(x) {
    this._attack -= Math.round(Math.log2(x) * 5);
  }
}
