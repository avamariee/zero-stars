require('dotenv').config();
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


server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const API_KEY = process.env.YELP_KEY

console.log(API_KEY)


app.get('/asdf', (req, res) => {

  fetch('https://api.yelp.com/v3/businesses/'

    // + data.id + "/reviews" +

    +

    'search?term=delis&latitude=37.786882&longitude=-122.3999721',
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Origin: 'localhost',
        withCredentials: true,
        "Access-Control-Allow-Origin": "*"
      }
    }).then(data => data.json())
    .then(async data => {
      console.log(data)

      for (let i = 0; i < data.businesses.length; i++) {
        const business = data.businesses[i]
        business.reviews = await (await fetch('https://api.yelp.com/v3/businesses/' + business.id + '/reviews',
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            Origin: 'localhost',
            withCredentials: true,
            "Access-Control-Allow-Origin": "*"
          }
        }
        )).json()
        console.log(business.reviews)
      }

      res.json(data)




    })
})

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

// app.get("/Pizza", (req, res) => {res.json({Name: "Pizza"})})
// app.listen(PORT)


console.log('Pizza');
