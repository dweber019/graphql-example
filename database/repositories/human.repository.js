const Human = require('../models/human.model');
const { orderedFor } = require('../../lib/util');

module.exports = {
  getAllHumans() {
    return Human.find({}).exec();
  },
  getHumanById(humanId) {
    return Human.findById(humanId).populate('weapon').exec();
  }
};
