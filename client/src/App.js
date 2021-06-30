import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router/* , Switch, Route */ } from 'react-router-dom';

/* import components */
import Profile from './components/Profile';
import AppNav from './components/Navbar';
import Landing from './components/Landing'
import Search from './components/Search'
// import Footer from './components/Footer'

import '././styles.css'



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

const [currentPage, setCurrentPage] = useState("landing");
  
  // switch case to display each page
  const displayPage = () => {
    switch (currentPage) {
  
      case "landing":
        return <Landing />;
  
      case "search":
        return <Search />;
  
      case "profile":
        return <Profile />;
  
      default:
        return <Landing />
  
    }
  }

  return (

    <ApolloProvider client={client}>
      <Router>
        <>
          <AppNav 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          />
          <div>
            <main>
              {/* display page from switch case above */}
              {displayPage()}
            </main>
          </div>
        </>
        {/* add footer once merged into develop */}
        {/* <Footer></Footer> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
