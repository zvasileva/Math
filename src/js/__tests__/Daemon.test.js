import Daemon from '../Daemon';

test.each([
  ['Ivan', 'Daemon', 5, 0, {
    name: 'Ivan', type: 'Daemon', health: 100, level: 1, _attack: 60, _stoned: 0, defence: 40,
  }],
  ['Ivan', 'Daemon', 2, 1, {
    name: 'Ivan', type: 'Daemon', health: 100, level: 1, _attack: 85, _stoned: 1, defence: 40,
  }],
])('get result', (name, type, distance, stoned, expected) => {
  const result = new Daemon(name, type);
  result.stoned = stoned;
  result.attack = distance;
  expect(result).toEqual(expected);
});

test.each([
  ['Ivan', 'Daemon', 5, 0, 60],
  ['Ivan', 'Daemon', 2, 1, 85],
])('get attack', (name, type, distance, stoned, expected) => {
  const daemon = new Daemon(name, type);
  daemon.stoned = stoned;
  daemon.attack = distance;
  const result = daemon.attack;
  expect(result).toBe(expected);
});

test.each([
  ['Ivan', 'Daemon', 0, 0],
  ['Ivan', 'Daemon', 1, 1],
])('get stoned', (name, type, stoned, expected) => {
  const daemon = new Daemon(name, type);
  daemon.stoned = stoned;
  const result = daemon.stoned;
  expect(result).toBe(expected);
});
