import React from 'react';

function Landing() {
  return (
    <div>


      <header className="section has-text-centered">
        <h1 className="title is-1"> The Best of the Worst!</h1>
        <h2 className="subtitle is-2">★☆☆☆☆</h2>
      </header>




      <div className="landingSearch">
        <div className="field has-addons ">
          <div class="columns is-mobile is-centered">
            <div className="control searchBar">
              <input className="input" type="text" placeholder="Find a restaurant" />
            </div>
            <div className="control">
              <a className="button is-info">
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Landing;
