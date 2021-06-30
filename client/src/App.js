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
import PostForm from './components/PostForm';
import PostDisplay from './components/PostDisplay';

import '././styles.css'



// https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.3999721



// import Switch from 'react-bootstrap/esm/Switch';



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

/*   const [currentPage, setCurrentPage] = useState("profile");

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
        return null;

    }
  }; */

  return (


        <ApolloProvider client={client}>
          <Router>
            <>
              <AppNav />
              <PostForm></PostForm>
              <PostDisplay></PostDisplay>
              {/* <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/profile' component={Profile} />
                <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
              </Switch> */}
            </>
          </Router>
        </ApolloProvider>


    /*   <ApolloProvider client={client}> */
/*     <Router>
      <div>
        <div className="mobile-header">
          <AppNav currentPage={currentPage} setCurrentPage={setCurrentPage}></AppNav>
        </div>
        <div>
          <main>{displayPage()}</main>
        </div>
        <div>
          {/* <Footer></Footer> */
/*         </div>
      </div>
    </Router > */ 
  );
}

export default App;



