import React from 'react';
/* import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; */

/* import Navbar from './components/Navbar'; */

/* const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
}); */

function App() {
  return (

    <div>
{/*       <Navbar /> */}
      Test
    </div>
/*     <ApolloProvider client={client}>
      <Router>
        <>
          <Nav />
          <Switch>
            <Route />
          </Switch>
        </>
      </Router>
    </ApolloProvider> */
  );
}

export default App;
