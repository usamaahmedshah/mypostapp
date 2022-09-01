import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section classNameNameName='hero-section'>
        <div
          id='carouselExampleIndicators'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src='https://images.unsplash.com/photo-1661159633818-d723d41c9f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                alt='...'
                className='d-block w-100'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://images.unsplash.com/photo-1661933159306-0f118db543b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                alt='...'
                className='d-block w-100'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://images.unsplash.com/photo-1659535979248-bf5954d21328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                className='d-block w-100'
                alt='...'
              />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </section>
      <section classNameNameName='featured-posts container pt-2'>
        <h3 className='text-center text-uppercase py-4'>Featured Posts</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className='card' style={{ width: '18rem' }}>
              <img
                src='https://images.unsplash.com/photo-1661974334786-470cae9bd968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='d-grid'>
                  <Link to='#' className='btn btn-warning'>
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className='card' style={{ width: '18rem' }}>
              <img
                src='https://images.unsplash.com/photo-1661974334786-470cae9bd968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='d-grid'>
                  <Link to='#' className='btn btn-warning'>
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className='card' style={{ width: '18rem' }}>
              <img
                src='https://images.unsplash.com/photo-1661974334786-470cae9bd968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='d-grid'>
                  <Link to='#' className='btn btn-warning'>
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section classNameNameName='latest-posts container pt-2'>
        <h3 className='text-center text-uppercase py-4'>Latest Posts</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className='card' style={{ width: '18rem' }}>
              <img
                src='https://images.unsplash.com/photo-1661974334786-470cae9bd968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='d-grid'>
                  <Link to='#' className='btn btn-warning'>
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className='card' style={{ width: '18rem' }}>
              <img
                src='https://images.unsplash.com/photo-1661974334786-470cae9bd968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='d-grid'>
                  <Link to='#' className='btn btn-warning'>
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className='card' style={{ width: '18rem' }}>
              <img
                src='https://images.unsplash.com/photo-1661974334786-470cae9bd968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className='d-grid'>
                  <Link to='#' className='btn btn-warning'>
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section classNameNameName='our-portfolio container'>
        <h3 className='text-center text-uppercase pt-4'>Our Portfolio</h3>
      </section>
    </div>
  );
}

export default Home;
