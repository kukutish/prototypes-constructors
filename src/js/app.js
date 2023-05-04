function Character(name, type) {
  this.type = false;
  this.health = 100;
  this.level = 1;

  if (name.length > 2 && name.length < 10) {
    this.name = name;
  } else {
    throw new Error('Имя должно быть длиннее 2 символов и короче 10');
  }

  let objCaracters = {
    Bowman: [25, 25],
    Swordsman: [40, 10],
    Magician: [10, 40],
    Daemon: [25, 25],
    Undead: [40, 10],
    Zombie: [10, 40],
  };

  for (const key in objCaracters) {
    if (key === type) {
      this.type = type;
    }
  }

  if (!this.type) {
    throw new Error('Персонажа такого типа не существует');
  }

  [this.attack, this.defense] = objCaracters[this.type];
}

// const Ivan = new Character('Ivan', 'Magician');
// console.log(Ivan);
// const Igor = new Character('I', 'Magician');
// console.log(Igor);

export default Character;
