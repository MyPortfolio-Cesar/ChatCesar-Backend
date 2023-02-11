const {Schema, model} = require('mongoose');

const NotificationSchema = new Schema({
    content: {
        type: String,
        required: [true, 'You must put the content']
    },
    type: {
        type: String,
        required: [true, 'You must put the type'],
    },
    seen: {
        type: Boolean,
        default: false
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true]
    },
    redirectURL: {
        type: String,
        required: [true]
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Notification', NotificationSchema);