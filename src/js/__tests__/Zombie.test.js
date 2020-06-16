import Zombie from '../Zombie';

test.each([
  ['Ivan', 'Zombie', {
    name: 'Ivan', type: 'Zombie', health: 100, level: 2, attack: 48, defence: 12,
  }],
])('get result', (name, type, expected) => {
  const result = new Zombie(name, type);
  result.levelUp();
  expect(result).toEqual(expected);
});
