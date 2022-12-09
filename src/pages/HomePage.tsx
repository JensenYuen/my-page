import react from 'react'
import { Container, Navbar } from 'react-bootstrap';
import logo from '../logo.svg';
import '../stylesheets/App.css';

const HomePage = () => {
  return (
    <Container fluid>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          Home Page
        </a>
        <a
          className="App-link"
          href="/info"
          rel="noopener noreferrer"
        >
          About
        </a>
      </header>
    </Container>
  );
}

export default HomePage;
