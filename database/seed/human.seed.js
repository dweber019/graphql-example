const Human = require('../models/human.model');
const Weapon = require('../models/weapon.model');
const faker = require('faker');
const _ = require('lodash');

const genders = 'Female Male'.split(' ');

function teardown(cb) {
  Human.remove({}).exec((err) => cb(err));
}

function run(cb) {

  let humansCollection = [];

  Weapon.find({}).exec(function (err, weapons) {

    for (let i = 0; i < 20; i++) {
      humansCollection.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        gender: faker.random.arrayElement(genders),
        weapon: weapons[_.random(0, weapons.length - 1)]._id
      });
    }

    Human.collection.insert(humansCollection, (err) => cb(err));

  });
}

module.exports = {
  teardown: teardown,
  run: run
}
