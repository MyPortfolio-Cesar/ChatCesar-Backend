const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'You must put the fullname']
    },
    username: {
        type: String,
        required: [true, 'You must put the username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'You must put the email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'You must put the password'],
        select: false
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User', UserSchema);