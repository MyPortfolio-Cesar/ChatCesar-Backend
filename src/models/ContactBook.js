const {Schema, model} = require('mongoose');

const ContactBookSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'You must put the user']
    },
    contacts: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('ContactBook', ContactBookSchema);