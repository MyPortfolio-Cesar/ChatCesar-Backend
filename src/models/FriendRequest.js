const {Schema, model} = require('mongoose');

const FriendRequestSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'You must put the user']
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: []
    },
    status: {
        type: String,
        default: "PENDING"
    },

}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('FriendRequest', FriendRequestSchema);