const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const commentSchema = require('./Comment');

const postSchema = new Schema({

    postText: {
        type: String,
        required: 'You have to enter text!',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
        type: String,
        required: true
    },
    comments: [commentSchema]
},
    {
        toJSON: {
            getters: true
        }
    }
)

postSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})

const Post = model('Post', postSchema);

module.exports = Post;