const db = require('../mdb.js');
const Schema = db.Schema;

const warPlacesSchema = new Schema({
  name: { type: String, required: true, index: true },
  active: { type: Boolean, required: true, 'default': true },
  humans : [{ type: db.Schema.Types.ObjectId, ref: 'Human' }],
  droids : [{ type: db.Schema.Types.ObjectId, ref: 'Droid' }],

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const warPlacesModel = db.model('WarPlace', warPlacesSchema);

module.exports = warPlacesModel;