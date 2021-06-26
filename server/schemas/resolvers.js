const { User, Restaurant, Review, Favorites } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get all useres
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('favorites')
            // .populate('friends')
            // friends list not created yet
        },
        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('favorites')
            // .populate('friends)
            // friends list not created yet
            
        }
    }
}