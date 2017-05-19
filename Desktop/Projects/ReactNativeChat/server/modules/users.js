const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
    index: { unique: true }
  },
  password: {
    type: String,
    required: [true, '']
  },
  name: {
    type: String,
    required: [true, ''],
    index: { unique: true }
  }
})

UserSchema.methods.validPassword = (password) => {
  return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('user', UserSchema);

module.exports = User;