import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* import components */
import Profile from './components/Profile';
import AppNav from './components/Navbar';
import Landing from './components/Landing'
import Search from './components/Search'
import Footer from './components/Footer'

import '././styles.css'
import SearchFoods from './pages/SearchFood';



// https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.3999721

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

// getters and setters for state for page

function App() {


  return (


        <ApolloProvider client={client}>
          <Router>
            <>
              <AppNav />
              {/* <Search></Search> */}
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/profile/:username' component={Profile} />
                <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
              </Switch>
            </>
          </Router>
        </ApolloProvider>

  );
}

export default App;



