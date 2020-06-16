import Daemon from '../Daemon';

test.each([
  ['Ivan', 'Daemon', 5, {
    name: 'Ivan', type: 'Daemon', health: 100, level: 1, _attack: 88, defence: 40,
  }],
])('get result', (name, type, distance, expected) => {
  const result = new Daemon(name, type);
  result.attack = distance;
  expect(result).toEqual(expected);
});

test.each([
  ['Ivan', 'Daemon', 5, 88],
])('get attack', (name, type, distance, expected) => {
  const daemon = new Daemon(name, type);
  daemon.attack = distance;
  const result = daemon.attack;
  expect(result).toBe(expected);
});
