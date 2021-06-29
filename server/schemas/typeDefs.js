const { gql } = require('apollo-server-express');

const typeDefs = gql`

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

type User {
    _id: ID
    username: String
    email: String
    #if friends,  friendCount: Int
    #if friends,  friends: [User]

}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    #favorites?
    favorites(name: String!): Favorite
    #friends?
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    #add favorite, addFavorite(favoriteBody: String!): Favorite
    #add friend addFriend(friendId: ID!): User
    addFavorite(favoriteBody: String!): Favorite
    
}

type Auth {
    token: ID!
    user: User
  }

`;

//export the typeDefs
module.exports = typeDefs;