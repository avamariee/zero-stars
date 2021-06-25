import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router/* , Switch, Route */ } from 'react-router-dom';

import Profile from './components/Profile';
import AppNav from './components/Navbar';
import '././styles.css'
import Switch from 'react-bootstrap/esm/Switch';

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
          <Switch>
          <Profile></Profile>
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
