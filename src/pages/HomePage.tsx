import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';

const HomePage = () => {
  return (
    <Container fluid className='d-flex justiy-content-center item-align-center h-100'
      style={{ margin: "auto", paddingTop: "4vw", paddingInline: "5vw" }}>
      <Banner />
    </Container>
  );
}

export default HomePage;
