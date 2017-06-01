const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  },
  threads: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Thread', index: true }],
    required: false
  },
  friends: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User', index: true }],
    required: false
  },
   token: {
    type: String,
    required: false
  }
})

const User = mongoose.model('user', UserSchema);

module.exports = User;