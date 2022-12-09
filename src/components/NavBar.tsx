import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

interface Props {
  title: string,
  links: string[]
}

const NavBar = ({ title, links }:Props) => {

  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              links.map((link: string) =>{
                return (
                  <Nav>
                    <Link to={`/${link}`}>{link}</Link>
                  </Nav>
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
