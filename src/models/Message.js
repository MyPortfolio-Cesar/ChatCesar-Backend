const {Schema, model} = require('mongoose');

const MessageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'You must put the user']
    },
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
        default: []
    },
    content: {
        type: String,
        required: [true, 'You must put the content message']
    },
    seen: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Message', MessageSchema);