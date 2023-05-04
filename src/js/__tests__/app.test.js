import Character from '../app';

test('get object', () => {
  const result = {
    type: 'Magician',
    health: 100,
    level: 1,
    name: 'Ivan',
    attack: 10,
    defense: 40,
  };

  const fine = new Character('Ivan', 'Magician');
  const noName = () => new Character('b', 'Magician');
  const noType = () => new Character('Ivan', 'No');

  expect(fine).toEqual(result);
  expect(noName).toThrow('Имя должно быть длиннее 2 символов и короче 10');
  expect(noType).toThrow('Персонажа такого типа не существует');
});
