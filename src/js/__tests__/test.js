import indication from '../app';

describe('For indication', () => {
  test.each([
    ['health > 50', { name: 'Mage', health: 90 }, 'healthy'],
    ['health = 50', { name: 'Mage', health: 50 }, 'wounded'],
    ['15 < health < 50', { name: 'Mage', health: 45 }, 'wounded'],
    ['health = 15', { name: 'Mage', health: 15 }, 'critical'],
    ['health < 15', { name: 'Mage', health: 7 }, 'critical'],
    ['health = 0', { name: 'Mage', health: 0 }, 'over'],
    ['health < 0', { name: 'Mage', health: -5 }, 'over'],
    ['health isn`t number', { name: 'Mage', health: 'abc' }, 'error'],
  ])(
    ('-> %s'),
    (range, obj, expected) => {
      const str = indication(obj);

      expect(str).toBe(expected);
    },
  );
});
