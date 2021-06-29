const { User, Restaurant, Review, Favorites } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get 'me' (current logged in user)
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('thoughts')
                    .populate('friends');

                return userData;
            }

            throw new AuthenticationError('You are not logged in!');
        },
        favorites: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Favorites.find(params).sort({});
            // what to put in sort?
            // is this set up correctly?

        },
        // get all users
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
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials.');
            }

            const correctPass = await user.isCorrectPassword(password);

            if (!correctPass) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        // favorites list add, unsure if this is correct. will need to revise

        // addFavorite: async (parent, args, context) => {
        //     if (context.user) {
        //         const favorite = await Favorite.create({ ...args, username: context.user.username });

        //         await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             { $push: { favorites: favorite._id } },
        //             { new: true }
        //         )
        //         return favorite;
        //     }

        //     throw new AuthenticationError('You need to be logged in!');
        // },

        // addFriend: async ( parent, {friendId }, context ) => {
        //     if(context.user){
        //         const updatedUser = await User.findOneAndUpdate(
        //             {_id: context.user._id },
        //             {$addToSet: { friends: friendId }},
        //             { new: true }
        //         )
        //         .populate('friends')
        //         return updatedUser;
        //     }
        //     throw new AuthenticationError('You need to be logged in!')
        // }
    }
};

module.exports = resolvers;