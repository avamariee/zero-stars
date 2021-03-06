import React, { useEffect, useState, useCallback } from 'react';
import starlogo from '../../zerostars3.svg';

import { saveFoodIds, getSavedFoodIds } from '../../utils/localStorage';
import { useParams } from 'react-router';
import { useMutation } from '@apollo/client';
import { SAVE_FOOD } from '../../utils/mutations';

function Search() {

  const { searchTerm } = useParams();

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
  // create state for holding search field data
  const [searchInput, setSearchInput] = useState(searchTerm);
  // create state to hold saved foodId values
  const [savedFoodIds, setSavedFoodIds] = useState(getSavedFoodIds());

  const [saveFood, { error }] = useMutation(SAVE_FOOD);

  // need a use state specifically for the search function

  useEffect(() => {


    // onclick for search button needs to run this api
    // add input parameters and send the search parameters to the backend
    getApiStuff()
      .then(data => setBadRestaurants(data.businesses))

    // if we get to saving reviews
    return () => saveFoodIds(savedFoodIds);

  }, [])



  console.log(badRestaurants)

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!searchInput) {
      return false;
    }

    console.log(`submitted, ${badRestaurants}`);
  }


  return (
    <div>
      <div class="container is-fluid">
        <div class="notification">
          <img class="logo" src={starlogo} />
        </div>
      </div>

      <div class="boxLanding my-5">
        <div class="field has-addons ">
          <div class="control searchBar">
            <input class="input " type="text" placeholder="Search Again"
              onChange={(e) => setSearchInput(e.target.value)} value={searchInput}></input>
          </div>
          <div class="control">
            <button class="btn">
              Search
            </button>
          </div>
        </div>
      </div>
     <div className="columns is-centered">
        <div class="column">
          {showSearchResults(badRestaurants, searchInput)}
  
        </div>
     </div>

    </div>
  )
}

function showSearchResults(badRestaurants, searchInput) {
  if (badRestaurants.length > 0) {
    return <>
      {(badRestaurants.filter(rest => searchInput ? rest.name.toUpperCase().includes(searchInput.toUpperCase()) : true).map(rest => (

        <div class="card burgers columns is-centered">
          <div class="card-image">
          </div>
          <div class="card-content column is-centered">
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
            {rest.reviews.reviews.map(review => review.text)}
          </div>

        </div>
      )))} </>
  } else {
    return <div className="loading" >One moment please...</div>
  }

}






export default Search;