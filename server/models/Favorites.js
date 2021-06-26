const mongoose = require('mongoose');

const { Schema } = mongoose;

const favoritesSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    favoriteBody: {
        type: String,
        required: true,
    }
});

// do we need to save the number of stars, or reviews tied to the favorites? unsure.

const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites;