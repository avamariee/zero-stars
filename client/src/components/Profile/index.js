import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import PostDisplay from '../PostDisplay';
import CommentList from '../CommentList';
import Post from '../SinglePost';

function Profile(props) {

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || data?.user || {};

  const [value, setValue] = useState(props.name);

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  // redirect to personal profile page if username is the logged-in user's
console.log(user)
  return (
    <div>
      <div>
        <div className="columns is-centered is-mobile avatar">
          <div className="columns is-half is-mobile">
            <div className="column"><img src="http://placekitten.com/200/200"></img></div>
          </div>
          <div className="media-content column">
            <p className="titlez2">
              {user.username}</p>

            {/*             <div className="form-group">
              <label htmlFor="FormControlTextarea1">
                About Me:
              </label>
            </div>
            <form id="FormControlTextarea1" method="POST">
              <textarea 
              id="FormControlTextarea1" 
              className="textarea1" 
              placeholder= 'Type here...'
              value={value} 
              onChange={handleChange} 
              />
              <input className="meme" type="submit" value="Save" />
            </form> */}

            <div className="form-group">
              <label htmlFor="FormControlTextarea1">
                About Me:
              </label>
              <textarea
                className="form-control"
                id="FormControlTextarea1"
                rows="5"
                placeholder= 'Type here...'
              />
            </div>

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
            <h2 className="titlez2 column">
              {user.username} 's Posts
              <br/>
              <br/>
            </h2>
            
           {user.posts?.map(post => <Post post={post} />)}

            
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
