  /////// tess code ////////
  
import React, { useState, useEffect } from 'react';
import maleImage from '../../images/male.png'
import femaleImage from '../../images/female.png'
import nonbinaryImage from '../../images/nonbinary.png'



function Profile() {

  //start with empty string once you have API which will call with what we do want and set the state
  //switch statement 17, 20, 23
  const [userGender, setUserGender] = useState('Male');
  const [profilePhoto, setProfilePhoto] = useState(nonbinaryImage);

  useEffect(() => {
    // Update the document title using the browser API
    if (userGender === 'Male') {
      setProfilePhoto(maleImage)
    }
    if (userGender === 'Female') {
      setProfilePhoto(femaleImage)
    }
    if (userGender === 'Nonbinary') {
      setProfilePhoto(nonbinaryImage)
    }

  },
  [userGender]

  );

  /////// tess code ////////

  return (
    <div>
      <div class="columns is-centered is-mobile avatar">
        <div class="columns is-half is-mobile">
          <div class="column"><img src={profilePhoto}></img></div>
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
        </div>
        <div className="columns avatar is-mobile">
          <div className="column favorites">
            <h2 className="title is-centered">
              Favorites
            </h2>
            <ul>
              <a href='/'><li>Taco Bell</li></a>
              <a href='/'><li>Taco Bell</li></a>
              <a href='/'><li>Taco Bell</li></a>
              <a href='/'><li>Taco Bell</li></a>
              <a href='/'><li>Taco Bell</li></a>
            </ul>
          </div>

        </div>
        <div className="columns avatar is-mobile">
          <div className="column comments">

            <h2 className="title">
              Posts/Comments
            </h2>

            <article>
              <div className="post">
                <a href="/"></a>
                <span className="post-title">Test Title</span>
              </div>
              <div className="post-text">

                This is the body of the post.

              </div>
              <div className="post-user">
                By <span id="user"><a href="/">User</a></span> on
                <span id="date"> date</span>

              </div>
            </article>
          </div>
        </div>

        <div className="columns avatar is-mobile">
          <div className="column friends">
            <h2 className="title">
              Extra? Friends List
            </h2>
            <ul>
              <a href='/'><li>Luisianna</li></a>
              <a href='/'><li>Ava</li></a>
              <a href='/'><li>Janell</li></a>
              <a href='/'><li>Tess</li></a>
              <a href='/'><li>Landon</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
