const { Schema } = require('mongoose');

const reviewSchema = new Schema ({
    reviewBody: {
        type: String,
        required: true,
    }
    // add more to this later, seems incomplete
})

module.exports = reviewSchema