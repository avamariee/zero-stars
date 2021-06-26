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

type Auth {
    token: ID!
    user: User
  }

`

module.exports = typeDefs;