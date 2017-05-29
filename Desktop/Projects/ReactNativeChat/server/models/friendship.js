const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendShipSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: 'User', index: true }, { type: Schema.Types.ObjectId, ref: 'User', index: true }]
})

const Friendship = mongoose.model('friendship', FriendShipSchema);

module.exports = Friendship;