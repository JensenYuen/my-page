import react from 'react'
import { Container } from 'react-bootstrap';
import '../index.css';
import Banner from '../components/Banner';

const HomePage = () => {
  return (
    <main>
      <Container fluid className='d-flex justiy-content-center item-align-center h-100'>
        <Banner />
      </Container>
    </main>
  );
}

export default HomePage;
