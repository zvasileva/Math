import Swordsman from '../Swordsman';

test.each([
  ['Ivan', 'Swordsman', {
    name: 'Ivan', type: 'Swordsman', health: 100, level: 2, attack: 48, defence: 12,
  }],
])('get result', (name, type, expected) => {
  const result = new Swordsman(name, type);
  result.levelUp();
  expect(result).toEqual(expected);
});
