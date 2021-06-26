const axios = require("axios")

require('dotenv').config();
const YELP_KEY = process.env.YELP_KEY;

let yelpGQL = axios.create({
    url: "https://api.yelp.com/v3/graphql",
    headers: {
        Authorization: `Bearer ${YELP_KEY}`,
        "Content-type": "application/json",
    },
    method: "POST",
})

yelpGQL({
    data: JSON.stringify({
        query: `{
      search(term: "coffee",
              location: "kyoto",
              limit: 10) {
          business {
              name
          }
      }
  }`,
    }),
}).then(({ data }) => {
    // Double data: data is what Axios puts the response body in, but it's also what GraphQL returns
    let businesses = data.data.search.business
    businesses.forEach((b) => {
        console.log("Name: ", b.name)
    })
})

// // Our GQL Helper
// yelpGQL({
//     data: JSON.stringify({
//       query: `{
//         reviews(business: "9QFiF_YBCKvWsUu50G_yxg") {
//           total
//           review {
//             url
//             id
//             rating
//             text
//           }
//         }
//       }`,
//     }),
//   }).then(({ data }) => {
//     console.log(data)
//   })