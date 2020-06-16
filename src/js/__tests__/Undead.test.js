import Undead from '../Undead';

test.each([
  ['Ivan', 'Undead', {
    name: 'Ivan', type: 'Undead', health: 100, level: 2, attack: 30, defence: 30,
  }],
])('get result', (name, type, expected) => {
  const result = new Undead(name, type);
  result.levelUp();
  expect(result).toEqual(expected);
});
