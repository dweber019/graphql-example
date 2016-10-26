const Weapon = require('../models/weapon.model');

const weaponTypes = 'Laser Sword Canon Knife Pistol'.split(' ');

function teardown(cb) {
  Weapon.remove({}).exec((err) => cb(err));
}

function run(cb) {
  let weaponsCollection = [];

  weaponsCollection.push({
    name: 'Laser Pistol',
    type: weaponTypes[0],
    fireStrength: 9
  });

  weaponsCollection.push({
    name: 'Laser Sword',
    type: weaponTypes[1],
    fireStrength: 6
  });

  weaponsCollection.push({
    name: 'Blast Canon',
    type: weaponTypes[2],
    fireStrength: 10
  });

  weaponsCollection.push({
    name: 'Pirate Knife',
    type: weaponTypes[3],
    fireStrength: 3
  });

  weaponsCollection.push({
    name: 'Revolver',
    type: weaponTypes[4],
    fireStrength: 7
  });

  Weapon.collection.insert(weaponsCollection, (err) => cb(err));
}

module.exports = {
  teardown: teardown,
  run: run
}
