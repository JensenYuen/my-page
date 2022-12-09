import react from 'react'
import { Container, Navbar } from 'react-bootstrap';
import Banner from '../components/Banner';
import logo from '../logo.svg';
import '../stylesheets/App.css';

const HomePage = () => {
  return (
    <>
      <Banner
        heading='Hello and welcome'
        subHeading='My name is Jensen'
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </>
  );
}

export default HomePage;
