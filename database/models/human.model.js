const db = require('../mdb.js');
const Schema = db.Schema;

const genders = 'Female Male'.split(' ');

const humanSchema = new Schema({
  firstName: { type: String, required: true, index: true },
  lastName: { type: String, required: true, index: true },
  gender: { type: String, enum: genders },
  weapon: { type: db.Schema.Types.ObjectId, ref: 'Weapon', required: true },
  warPlaces : [{ type: db.Schema.Types.ObjectId, ref: 'WarPlace' }],

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

humanSchema.methods.fight = function(cb) {
  return 'Arrr, laser sword!!!';
};

const humanModel = db.model('Human', humanSchema);

module.exports = humanModel;