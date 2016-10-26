const WarPlaces = require('../models/war-places.model');
const Human = require('../models/human.model');
const Droid = require('../models/droid.model');
const faker = require('faker');

function teardown(cb) {
  WarPlaces.remove({}).exec((err) => cb(err));
}

function run(cb) {

  Human.find({}).exec((err, humans) => {
    Droid.find({}).exec((err, droids) => {

      let warPlacesCollection = [];

      for (let i = 0; i < 20; i++) {
        warPlacesCollection.push({
          name: faker.lorem.word(),
          active: faker.random.boolean(),
          humans: humans.filter((a, idx) => idx !== i).map(h => h._id),
          droids: droids.filter((a, idx) => idx !== i).map(d => d._id)
        });
      }

      WarPlaces.collection.insert(warPlacesCollection, (err) => cb(err));

    })
  });
}

module.exports = {
  teardown: teardown,
  run: run
}
