import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed-bottom py-2 my-2 px-4 bg-light
      border-dark border-opacity-50 border-top
      d-flex flex-wrap justify-content-between align-items-center">
      <div>
        <span className="mb-3 mb-md-0 text-muted">{`© ${year} Jensen Yuen`}</span>
      </div>
      <div className="">
        <a href="https://github.com/JensenYuen"
          target="_blank"
          rel="noopener noreferrer"
          className='fs-4 mx-1'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/jensen-yuen/"
          target="_blank"
          rel="noopener noreferrer"
          className='fs-4 mx-1'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
