const { Schema, model } = require('mongoose')

const userSchema = Schema({
    name: String,
    email: String,
    password: String
});

module.exports = model('user', userSchema)