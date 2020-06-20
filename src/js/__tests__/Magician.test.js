import Magician from '../Magician';

test.each([
  ['Ivan', 'Magician', 5, 0, {
    name: 'Ivan', type: 'Magician', health: 100, level: 1, _attack: 60, _stoned: 0, defence: 40,
  }],
  ['Ivan', 'Magician', 2, 1, {
    name: 'Ivan', type: 'Magician', health: 100, level: 1, _attack: 85, _stoned: 1, defence: 40,
  }],
])('get magician', (name, type, distance, stoned, expected) => {
  const result = new Magician(name, type);
  result.stoned = stoned;
  result.attack = distance;
  expect(result).toEqual(expected);
});

test.each([
  ['Ivan', 'Magician', 5, 0, 60],
  ['Ivan', 'Magician', 2, 1, 85],
])('get attack', (name, type, distance, stoned, expected) => {
  const magician = new Magician(name, type);
  magician.stoned = stoned;
  magician.attack = distance;
  const result = magician.attack;
  expect(result).toBe(expected);
});

test.each([
  ['Ivan', 'Magician', 0, 0],
  ['Ivan', 'Magician', 1, 1],
])('get stoned', (name, type, stoned, expected) => {
  const magician = new Magician(name, type);
  magician.stoned = stoned;
  const result = magician.stoned;
  expect(result).toBe(expected);
});
