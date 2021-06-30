const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
}

type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
}

type Restaurant {
    _id: ID
    name: String
    rating: String
    reviews: [Review] 
}

type Favorite {
    _id: ID
    name: String
    favoriteBody: String
}

type Review {
    _id: ID
    reviewBody: String
}

type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    posts: [Post]
    friends: [User]

}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    favorites(name: String!): Favorite
    #friends?
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFavorite(favoriteBody: String!): Favorite
    addPost(postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post
    addFriend(friendId: ID!): User
    
}

type Auth {
    token: ID!
    user: User
  }

`;

//export the typeDefs
module.exports = typeDefs;