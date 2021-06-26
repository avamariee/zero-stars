const { Schema } = require('mongoose');

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
        // reviews: [reviewsSchema]
        
    }
);

// do we need to include any virtuals for this?

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;