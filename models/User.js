const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const hashSync = bcrypt.hashSync;
const compareSync = bcrypt.compareSync;
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
<<<<<<< HEAD
    unique: true,
=======
    unique: true
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver',
  },
  driverLocation: {
<<<<<<< HEAD
    type: [Number],
=======
    type: [Number]
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
  },
  userIsDriver: Boolean,
  onTrip: Boolean,
  firstName: String,
  lastName: String,
  avatar: String,
  email: {
    type: String,
    unique: true,
<<<<<<< HEAD
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', function (next) {
=======
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', function(next) {
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388
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
<<<<<<< HEAD
    return jwt.sign(
      {
        _id: this._id,
      },
      'SECRET'
    );
  },
};
=======
    return jwt.sign({
      _id: this._id
    },
    'SECRET'
  );
  }
}
>>>>>>> d0e47e5fa7c2eb0f21d2a91a010d138d7d0f5388

const User = mongoose.model('User', userSchema);

module.exports = User;
