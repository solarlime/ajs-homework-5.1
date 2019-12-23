import orderByProps from './app';

test('Should pass normally', () => {
  const obj = {
    level: 2, name: 'мечник', health: 10, attack: 80, defence: 40,
  };
  const arr = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, arr)).toEqual(expected);
});

test('For the standard sorting', () => {
  const obj = {
    level: 2, name: 'мечник', health: 10, attack: 80, defence: 40,
  };
  const arr = [];
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(orderByProps(obj, arr)).toEqual(expected);
});

test('For nothing to sort', () => {
  const obj = {};
  const arr = ['name'];
  const expected = [];
  expect(orderByProps(obj, arr)).toEqual(expected);
});
