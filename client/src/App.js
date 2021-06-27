import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router/* , Switch, Route */ } from 'react-router-dom';

import Profile from './components/Profile';
import AppNav from './components/Navbar';
import '././styles.css'

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

function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <>
          <AppNav />
          <div>
            <main>
              {/* display page from switch case above */}
              {displayPage()}
            </main>
          </div>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
