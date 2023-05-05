import Character from '../app';

test.each(
  [
    [{
      type: 'Magician',
      health: 100,
      level: 1,
      name: 'Ivan',
      attack: 10,
      defense: 40,
    }, ['Ivan', 'Magician'], 0],
    [{
      type: 'Magician',
      health: 70,
      level: 1,
      name: 'Egor',
      attack: 10,
      defense: 40,
    }, ['Egor', 'Magician'], 50],
    [{
      type: 'Magician',
      health: 0,
      level: 1,
      name: 'Igor',
      attack: 10,
      defense: 40,
    }, ['Igor', 'Magician'], 250,
    ],
  ],
)('get object', (result, values, damage) => {
  const [name, type] = values;
  const funcResult = new Character(`${name}`, `${type}`);
  funcResult.damage(damage);
  expect(funcResult).toEqual(result);
});

test.each(
  [
    ['Имя должно быть длиннее 2 символов и короче 10', ['b', 'Magician']],
    ['Персонажа такого типа не существует', ['Ivan', 'No']],
  ],
)('trow error', (result, values) => {
  const [name, type] = values;
  const funcResult = () => new Character(`${name}`, `${type}`);
  expect(funcResult).toThrow(`${result}`);
});
