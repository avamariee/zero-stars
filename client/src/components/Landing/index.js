import React from 'react';
import starlogo from '../../zerostars2.png';
import femalelogo from '../../Female Symbol.png';
import malelogo from '../../Male Symbol.png';
import fakephoto from '../../fakephoto.png';
import fakephoto2 from '../../fakephoto2.png';
import fakephoto3 from '../../fakephoto3.png';
import Carousel from 'react-bootstrap/Carousel'


function Landing() {
  return (
    <div>
      <hero>

        <div class="containerLanding is-fluid ">
          <div class="notification">
            <img class="logo" src={starlogo} />
          </div>
        </div>

        <div class="boxLanding my-5">
          <div class="field has-addons ">
            <div class="control searchBar is-centered">
              <input class="input " type="text" placeholder="Find a resturant" />
            </div>
            <div class="control">
              <a class="button">
                Search
              </a>
            </div>
          </div>
        </div>
        <div class="cardCarousel">
          <div class="card-content">
            <div class="content">
              <section class="section">
                <div class="container">


                  <Carousel>
                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block w-100"
                        src={fakephoto}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        {/* <h3 class="has-text-black" >First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img
                        className="d-block w-100"
                        src={fakephoto2}
                        alt="Second slide"
                      />
                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={fakephoto3}
                        alt="Third slide"
                      />
                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <h2>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h2>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>

                </div>
              </section>
            </div>
          </div>
        </div>

      </hero>
    </div>


  )
}



export default Landing;



// <header className ="section has-text-centered">
//   <h1 className ="title is-1"> The Best of the Worst!</h1>
//   <h2 className = "subtitle is-2">★☆☆☆☆</h2>
// </header>




// <div className = "landingSearch">
// <div className="field has-addons ">
//   <div class="columns is-mobile is-centered" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
//     <div className="control searchBar " >
//       <input className="input" type="text" placeholder="Find a restaurant"  />
//     </div>
//     <div className="control">
//       <a className="button is-info">
//       Search
//       </a>
//     </div>
//     </div>
// </div>
// </div>
// </div>


// );
// } 