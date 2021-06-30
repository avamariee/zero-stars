const { User, Favorites, Post, Comment } = require('../models');
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
        // find all posts
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        // find single post
        post: async (parent, { _id }) => {
            return Post.findOne({ _id })
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('favorites')
                .populate('friends')
                .populate('posts');
        },
        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('favorites')
                .populate('friends')
                .populate('posts');

        },
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

        addFriend: async (parent, { friendId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                )
                    .populate('friends')
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!')
        },

        addPost: async (parent, args, context) => {
            if (context.user) {
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { thoughts: thought._id } },
                    { new: true }
                );

                return post;

            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addComment: async (parent, { postId, commentBody }, context) => {
            if (context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }

                );

                return updatedPost;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addFriend: async (parent, { friendId }, context)=>{
            if(context.user){
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet: { friends: friendId }},
                    { new: true }

                ).populate('friends');
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!')
        }
    }
};

module.exports = resolvers;

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