const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const fetch = require("node-fetch");

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});


// API STUFF HERE?

// 'use strict';

// const yelp = require('yelp-fusion')
// require('dotenv').config();
// const YELP_KEY = process.env.YELP_KEY;


// const searchRequest = {
//     term: 'Taco Bell',
//     location: 'salt lake city, ut'
// };

// const client = yelp.client(YELP_KEY);

// client.search(searchRequest).then(response => {
//     const firstResult = response.jsonBody.businesses[0];
//     const prettyJson = JSON.stringify(firstResult, null, 4);
//     console.log(prettyJson);

// }).catch(e => {
//     console.log(e);
// })

// let getYelp = function () {
//   let apiUrl = "https://api.yelp.com/v3/search/taco-bell"

//   // make a request to the URL
//   fetch(apiUrl)
//     .then(function (response) {
//       // if the request was successful
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           console.log(data);

//         })
//       } else {
//         console.log("There was an error: " + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       console.log("Unable to connect to Yelp.")
//     })
// };

// getYelp();

// //////


server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

// app.get("/Pizza", (req, res) => {res.json({Name: "Pizza"})})
// app.listen(PORT)

console.log('Pizza');
