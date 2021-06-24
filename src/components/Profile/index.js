import React from 'react';

function Profile() {
  return (
    <div>
      <div class="columns avatar">
        <div class="columns is-mobile">
          <div class="column"><img src="http://placekitten.com/g/200/300"></img></div>
        </div>
        <div class="media-content">
          <p class="title">Kitty Cat</p>
          <p class="subtitle">
            Meow meow meow meow, meow meow meow. Meow. Meow meow meow meow.
          </p>
          <p class="subtitle">
            Gender: <span id="gender">Female</span> <br></br>
            Birthday: <span id="date">06/24/2021</span> <br></br>
            --------------------
          </p>
          <div class="columns is-mobile">
            <div class="column">
              <h2 class="title">
                Favorites
              </h2>
              <ol>
                <li>Taco Bell</li>
                <li>Taco Bell</li>
                <li>Taco Bell</li>
                <li>Taco Bell</li>
                <li>Taco Bell</li>
              </ol>
            </div>

          </div>
          <div class="columns is-mobile">
            <div class="column">

              <h2 class="title">
                Posts/Comments
              </h2>
              
              <article>
                <div class="post">
                  <a href="/"></a>
                  <span class="post-title">Test Title</span>
                </div>
                <div class="post-text">

                  This is the body of the post.

                </div>
                <div class="post-user">
                  By User on
                  date
                  
                </div>
              </article>
            </div>
          </div>

          <div class="columns is-mobile">
            <div class="column">
              <h2 class="title">
                Extra? Friends List
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default Profile;
