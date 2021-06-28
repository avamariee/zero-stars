const { Schema } = require('mongoose');
const mongoose = require('mongoose');
const reviewSchema = require('./Review');

const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        rating: {
            type: String,
            // should this be string or integer???
            required: true
        },
        // tie review to restaurant somehow?
        // reviews: [reviewSchema]
        
    }
);

// do we need to include any virtuals for this?

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;