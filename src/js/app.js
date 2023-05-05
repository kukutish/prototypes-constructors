function Character(name, type) {
  this.type = false;
  this.health = 100;
  this.level = 1;

  if (name.length > 2 && name.length < 10) {
    this.name = name;
  } else {
    throw new Error('Имя должно быть длиннее 2 символов и короче 10');
  }

  const objCaracters = {
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

Character.prototype.damage = function (points) {
  const damageHealth = points * (1 - this.defense / 100);
  if (this.health > 0 && damageHealth < this.health) {
    this.health -= points * (1 - this.defense / 100);
  } else {
    this.health = 0;
  }
};

export default Character;
