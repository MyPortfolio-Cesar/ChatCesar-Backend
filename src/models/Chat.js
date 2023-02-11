const {Schema, model} = require('mongoose');

const ChatSchema = new Schema({
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message',
        default: []
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'You must put the users']
    }],
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Chat', ChatSchema);