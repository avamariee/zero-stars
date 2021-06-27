import React from 'react';

// import yelp api functionality
import {useRestaurantSearch} from '../../hooks/yelp-api/useRestaurantSearch';

function Search() {

  // yelp API
  const [restaurants, amountResults, searchParams, setSearchparams] = useRestaurantSearch()

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

export default Search;
