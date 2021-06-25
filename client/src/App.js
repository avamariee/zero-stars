import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router/* , Switch, Route */ } from 'react-router-dom';

import Profile from './components/Profile';
import AppNav from './components/Navbar';
import Search from './components/Search/';
import '././styles.css';

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

function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <>
          <AppNav />
          {/* <Profile></Profile> */}
          <Search></Search>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
