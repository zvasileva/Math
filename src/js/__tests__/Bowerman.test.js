import Bowerman from '../Bowerman';

test.each([
  ['Ivan', 'Bowerman', {
    name: 'Ivan', type: 'Bowerman', health: 100, level: 2, attack: 30, defence: 30,
  }],
])('get result', (name, type, expected) => {
  const result = new Bowerman(name, type);
  result.levelUp();
  expect(result).toEqual(expected);
});
