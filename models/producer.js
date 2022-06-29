const { Schema, model } = require('mongoose')

const producerSchema = new Schema({
    name: String,
    gender: String,
    dob: String,
    bio: String
});

module.exports = model('producers', producerSchema)