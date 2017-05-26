const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const hash = bcrypt.hashSync(this.password)

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
    index: { unique: true }
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    index: { unique: true }
  }
})

UserSchema.methods.validPassword = function(password) {
  console.log(this);
  return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('user', UserSchema);

module.exports = User;