import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className='page-not-found'>
      <div className='page-not-found__content'>
        <h1 className='page-not-found__title'>404</h1>
        <h2 className='page-not-found__subtitle'>Page Not Found</h2>
        <p className='page-not-found__description'>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link to='/' className='page-not-found__link'>
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
