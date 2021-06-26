// const axios = require("axios")

'use strict';

const yelp = require('yelp-fusion')
require('dotenv').config();
const YELP_KEY = process.env.YELP_KEY;


const searchRequest = {
    term: 'Taco Bell',
    location: 'salt lake city, ut'
};

const client = yelp.client(YELP_KEY);

client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);

}).catch(e => {
    console.log(e);
})

// REST
// let yelpREST = axios.create({
//     baseURL: "https://api.yelp.com/v3/",
//     headers: {
//         Authorization: `Bearer ${YELP_KEY}`,
//         "Content-type": "application/json",
//     },
// })

// // Using the yelpREST helper we defined earlier
// yelpREST("/businesses/search", {
//     params: {
//         location: "kyoto",
//         term: "coffee",
//         limit: 10,
//     },
// }).then(({ data }) => {
//     let { businesses } = data
//     businesses.forEach((b) => {
//         console.log("Name: ", b.name)
//     })
// })

// let getYelp = function(){
//     let apiUrl = "https://api.yelp.com/v3/"

//     // make a request to the URL
//     fetch(apiUrl)
//     .then(function(response){
//         // if the request was successful
//         if(response.ok){
//             console.log(response);
//             response.json().then(function(data){
//                 console.log(data);

//             })
//         } else {
//             alert("There was an error: " + response.statusText);
//         }
//     })
//     .catch(function(error){
//         alert("Unable to connect to Yelp.")
//     })
// };

// getYelp();


