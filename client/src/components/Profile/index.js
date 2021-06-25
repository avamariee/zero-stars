import React from 'react';

function Profile() {
  return (
    <div>
      <div class="columns is-centered is-mobile avatar">
        <div class="columns is-half is-mobile">
          <div class="column"><img src="http://placekitten.com/200/200"></img></div>
        </div>
        <div class="media-content">
          <p class="title">Kitty Cat</p>
          <p class="subtitle">
            Meow meow meow meow, meow meow meow. Meow. Meow meow meow meow. Meow.
          </p>
          <p class="subtitle">
            Gender: <span id="gender">Female</span> <br></br>
            Birthday: <span id="birthdate">06/24/2021</span> <br></br>
            
          </p>
          <div class="columns is-mobile">
            <div class="column">
              <h2 class="title">
                Favorites
              </h2>
              <ul>
                <a href='/'><li>🍔<span>Taco Bell</span></li></a>
                <a href='/'><li>🍔<span>Taco Bell</span></li></a>
                <a href='/'><li>🍔<span>Taco Bell</span></li></a>
                <a href='/'><li>🍔<span>Taco Bell</span></li></a>
                <a href='/'><li>🍔<span>Taco Bell</span></li></a>
              </ul>
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
                  By <span id="user">User</span> on 
                  <span id="date"> date</span>

                </div>
              </article>
            </div>
          </div>

          <div class="columns is-mobile">
            <div class="column">
              <h2 class="title">
                Extra? Friends List
              </h2>
              <ol>
                <li>Luisianna</li>
                <li>Ava</li>
                <li>Janell</li>
                <li>Tess</li>
                <li>Landon</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
