const db = require('../mdb.js');
const Schema = db.Schema;

const droidSchema = new Schema({
  firstName: { type: String, required: true, index: true },
  lastName: { type: String, required: true, index: true },
  serialNumber: { type: String, require: true, unique: true },
  weapon: { type: db.Schema.Types.ObjectId, ref: 'Weapon' },
  warPlaces : [{ type: db.Schema.Types.ObjectId, ref: 'WarPlace' }],

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

droidSchema.methods.fight = function(cb) {
  return 'Piuww piuww!!!';
};

const droidModel = db.model('Droid', droidSchema);

module.exports = droidModel;