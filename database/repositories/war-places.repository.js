const WarPlaces = require('../models/war-places.model');
const { orderedFor } = require('../../lib/util');

module.exports = {
  getAllWarPlaces() {
    return WarPlaces.find({}).populate(['humans', 'droids']).exec();
  }
};
