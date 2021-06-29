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
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4 is-black">{rest.name}</p>
                <p class="subtitle is-6">@rest1</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1" />11:09 PM - 1 Jan 2016
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
