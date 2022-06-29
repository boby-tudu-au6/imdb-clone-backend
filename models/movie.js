const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title: String,
    year: String,
    plot: String,
    poster: String,
    actors: [{
        type: Schema.Types.ObjectId,
        ref: 'actors'
    }
    ],
    producers: [{
        type: Schema.Types.ObjectId,
        ref: 'producers'
    }],
});

module.exports = model('movies', movieSchema)