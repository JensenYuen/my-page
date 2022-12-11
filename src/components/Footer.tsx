import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed-bottom py-2 mt-2 px-4 bg-light
      border-dark border-opacity-50 border-top">
      <Container>
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <span className="mb-3 mb-md-0 text-muted">{`© ${year} Jensen Yuen`}</span>
          <div>
            <a href="https://github.com/JensenYuen"
              target="_blank"
              rel="noopener noreferrer"
              className='fs-4 mx-2'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/jensen-yuen/"
              target="_blank"
              rel="noopener noreferrer"
              className='fs-4 mx-2'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
