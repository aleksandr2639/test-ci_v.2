import sortArrayHero from '../app';

const list = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const expected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sort array', () => {
  expect(sortArrayHero(list)).toEqual(expected);
});

test('sort array', () => {
  expect(sortArrayHero(list)).not.toBe(expected);
});
