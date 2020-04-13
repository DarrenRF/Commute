const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const hashSync = bcrypt.hashSync;
const compareSync = bcrypt.compareSync;
const jwt = require('jsonwebtoken');

const driverSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  driverModeEnabled: Boolean,
  onTrip: Boolean,
  firstName: String,
  lastName: String,
  avatar: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

driverSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

driverSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateDriver(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign({
      _id: this._id
    },
    'SECRET'
  );
  }
}

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
