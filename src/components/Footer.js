import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div
      mt-5
      className='container-fluid bg-primary bg-gradient text-white'
      style={{ minHeight: '12rem' }}
    >
      <div className='row pt-4 text-center'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <h5>Quick Links</h5>
          <div className='d-flex flex-column align-items-evenly'>
            <Link to='#' className='text-white p-1'>
              About US
            </Link>
            <Link to='#' className='text-white p-1'>
              Our Posts
            </Link>
            <Link to='#' className='text-white p-1'>
              Our Team
            </Link>
            <Link
              to='#'
              className='text-white p-1
            '
            >
              Contact US
            </Link>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
          <h5>Newsletter</h5>
          <div
            style={{ minHeight: '7rem' }}
            className='d-flex flex-column justify-content-around'
          >
            <input
              type='text'
              className='form-control'
              placeholder='subscribe to newsletter'
            ></input>
            <button className='btn btn-warning'>Subscribe</button>
          </div>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-12 mb-2'>
          <h5>Contact</h5>
          <div className='d-flex flex-column'>
            <p>
              <i className='px-1 fa-solid fa-location-arrow'></i> This is street
              address
            </p>
            <p>This is city address</p>
            <p>Random state - 123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
