const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Restaurant {
    _id: ID
    name: String
    rating: String
    reviews: [Review] 
}

type Review {
    _id: ID
    reviewBody: String
}

type User {
    _id: ID
    username: String
    email: String

}

type Query {
    me: User
    users: [User]
    user(username: String!): user
    #favorites?
    #friends?
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    #add favorite, addFavorite(favoriteBody: String!): Favorite
    #add friend addFriend(friendId: ID!): User
}

type Auth {
    token: ID!
    user: User
  }

`

module.exports = typeDefs;