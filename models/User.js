const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const hashSync = bcrypt.hashSync;
const compareSync = bcrypt.compareSync;
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver',
  },
  driverLocation: {
    type: [Number]
  },
  userIsDriver: Boolean,
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

userSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

userSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
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

const User = mongoose.model('User', userSchema);

module.exports = User;
