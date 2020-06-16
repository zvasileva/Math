import Magician from '../Magician';

test.each([
  ['Ivan', 'Magician', 5, {
    name: 'Ivan', type: 'Magician', health: 100, level: 1, _attack: 88, defence: 40,
  }],
])('get magician', (name, type, distance, expected) => {
  const result = new Magician(name, type);
  result.attack = distance;
  expect(result).toEqual(expected);
});

test.each([
  ['Ivan', 'Magician', 5, 88],
])('get attack', (name, type, distance, expected) => {
  const magician = new Magician(name, type);
  magician.attack = distance;
  const result = magician.attack;
  expect(result).toBe(expected);
});
