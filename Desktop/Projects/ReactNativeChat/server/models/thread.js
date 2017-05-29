const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const ThreadSchema = new Schema({
  users: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User', index: true }, { type: Schema.Types.ObjectId, ref: 'User', index: true }],
    required: true
},
  messages: {
    type: [],
    required: false
  }
})

const Thread = mongoose.model('thread', ThreadSchema);

module.exports = Thread;