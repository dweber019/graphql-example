const db = require('../mdb.js');
const Schema = db.Schema;

const weaponTypes = 'Laser Sword Canon Knife Pistol'.split(' ');

const weaponSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: weaponTypes, required: true },
  fireStrength: { type: Number, required: true },

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const weaponModel = db.model('Weapon', weaponSchema);

module.exports = weaponModel;