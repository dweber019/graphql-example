const Droid = require('../models/droid.model');
const Weapon = require('../models/weapon.model');
const faker = require('faker');
const _ = require('lodash');

const genders = 'Female Male'.split(' ');

function teardown(cb) {
  Droid.remove({}).exec((err) => cb(err));
}

function run(cb) {
  let droidsCollection = [];

  Weapon.find({}).exec(function (err, weapons) {

    for (let i = 0; i < 20; i++) {
      droidsCollection.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        serialNumber: faker.random.number(),
        weapon: weapons[_.random(0, weapons.length - 1)]._id
      });
    }

    Droid.collection.insert(droidsCollection, (err) => cb(err));
  });
}

module.exports = {
  teardown: teardown,
  run: run
}
