import React, { useEffect, useState, useCallback } from 'react';
import starlogo from '../../zerostars.png';


function Search() {

  const getApiStuff = useCallback(
    // track search state in dependency array
    function () {
      return fetch('/asdf')
        .then(data => data.json())

    },
    // use this one
    []

  )
  // yelp API\
  const [badRestaurants, setBadRestaurants] = useState([])
  // need a use state specifically for the search function



  useEffect(() => {


    // onclick for search button needs to run this api
    // add input parameters and send the search parameters to the backend
    getApiStuff()
      .then(data => setBadRestaurants(data.businesses))


  }, [])



  console.log(badRestaurants)


  return (
    <div>
      <div class="container is-fluid">
        <div class="notification">
          <img class="logo" src={starlogo} />
        </div>
      </div>

      <div class="field has-addons ">
        <div class="control searchBar">
          <input class="input" type="text" placeholder="Search Again" />
        </div>
        <div class="control">
          <a class="button is-info">
            Search
          </a>
        </div>
      </div>

      <div>
      </div>
      <div class="box">
        {badRestaurants.map(rest => (

        <div class="card">
          <div class="card-image">
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://i.ebayimg.com/thumbs/images/g/KXsAAOSwSJpgAbh2/s-l96.jpg" alt="Placeholder image of a hamburger" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4 is-black">{rest.name}</p>
              </div>
            </div>

            <div class="content">
              {rest.reviews.text}
            </div>
            {/* <div class="ui heart rating" data-rating="1" data-max-rating="3"></div> */}
          </div>

        </div>
        ))}
        
      </div>










    </div>
  )
}






export default Search;
