import Character from '../task';

test.each([
  ['Ivan', 'Bowman', 200, {
    name: 'Ivan', type: 'Bowman', health: 0, attack: 10, defence: 40,
  }],
  ['Ivan', 'Bowman', 30, {
    name: 'Ivan', type: 'Bowman', health: 82, attack: 10, defence: 40,
  }],
])('get result', (name, type, points, expected) => {
  const result = new Character(name, type);
  result.damage(points);
  expect(result).toEqual(expected);
});
