import React, { useState } from 'react';
import starlogo from '../../zerostars3.svg';
import reviewone from '../../images/reviewone.png';
import reviewtwo from '../../images/reviewtwo.png';
import reviewthree from '../../images/reviewthree.png';
import Carousel from 'react-bootstrap/Carousel'
import PostForm from '../PostForm/index'
import PostDisplay from '../PostDisplay/index';
import { Link } from 'react-router-dom';


function Landing() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <hero>
        <div class="containerLanding is-fluid ">
          <div class="notification">
            <img class="logo" src={starlogo} />
          </div>
        </div>
      </hero>



      <div class="columns">
        <div class="column">
          <div class="boxLanding my-5">
            <div class="field has-addons ">
              <div class="control searchBar is-centered">
                <input
                  class="input "
                  type="text"
                  placeholder="Find a Resturant"
                  onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}
                />
              </div>
              <div class="control">
              <a>
                <Link
                  to={`/search/${searchTerm}`}
                  className="btn"
                >
                  Search
                </Link>
              </a>
            </div>

            </div>
          </div>

          <PostForm>
          </PostForm>
          <PostDisplay>
          </PostDisplay>

        </div>


        <div class="column">
          <div class="cardCarousel">
            <div class="card-content">
              <div class="content">
                <section class="section">
                  <div class="container">


                    <Carousel>
                      <Carousel.Item interval={5000}>
                        <img
                          className="d-block w-100"
                          src={reviewone}
                          alt="First slide"
                        />

                      </Carousel.Item>
                      <Carousel.Item interval={1000}>
                        <img
                          className="d-block w-100"
                          src={reviewtwo}
                          alt="Second slide"
                        />

                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={reviewthree}
                          alt="Third slide"
                        />

                      </Carousel.Item>
                    </Carousel>


                  </div>

                </section>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Landing;
