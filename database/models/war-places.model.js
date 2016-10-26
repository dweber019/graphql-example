const db = require('../mdb.js');
const Schema = db.Schema;

const warPlacesSchema = new Schema({
  name: { type: String, required: true, index: true },
  active: { type: Boolean, required: true, 'default': true },
  humans : [{ type: db.Schema.Types.ObjectId, ref: 'human' }],
  droids : [{ type: db.Schema.Types.ObjectId, ref: 'droid' }],

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const warPlacesModel = db.model('warPlace', warPlacesSchema);

module.exports = warPlacesModel;