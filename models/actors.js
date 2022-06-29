const { Schema, model } = require('mongoose')

const actorSchema = new Schema({
    name: String,
    gender: String,
    dob: String,
    bio: String
});

module.exports = model('actors', actorSchema)