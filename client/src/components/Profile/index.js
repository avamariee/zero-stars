import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ME } from '../../utils/queries';


function Profile() {

  const { username: userParam } = useParams();

  const { data } = useQuery(userParam ? GET_ME : {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};


//////////////////////////////////////////////////////////////////////
  //start with empty string once you have API which will call with what we do want and set the state
  //switch statement 17, 20, 23

  /* import maleImage from '../../images/male.png'
import femaleImage from '../../images/female.png'
import nonbinaryImage from '../../images/nonbinary.png' */

/*   const [userGender, setUserGender] = useState('Male');
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

  ); */
//////////////////////////////////////////////////////////////////////

  return (
    <div>
      <div>
        <div className="columns is-centered is-mobile avatar">
          <div className="columns is-half is-mobile">
            <div className="column"><img src="http://placekitten.com/200/200"></img></div>
          </div>
          <div className="media-content column">
            <p className="titlez2">{userParam ? `${user.username}` : 'your'}</p>
            <p className="subtitle">
              Description coming in the future.
            </p>
            
          </div>
        </div>
        <div className="columns avatar is-mobile">
          <div className="column favorites">
            <h2 className="titlez2 is-centered">
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

            <h2 className="titlez2">
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
            <h2 className="titlez2">
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
