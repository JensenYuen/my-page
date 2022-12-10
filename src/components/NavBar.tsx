import { NavbarBrand } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

interface Props {
  title: string,
  links: string[]
}

const NavBar = ({ title, links }: Props) => {

  return (
    <Nav className="justify-content-center border-bottom shadow
      border-dark border-opacity-50 fixed-top bg-light px-5 py-1"
      activeKey="/home"
    >
      <header className='d-flex flex-row'>
        {
          links.map((link: string) => {
            return (
              <Nav.Item key={link}>
                <Nav className="px-3" style={{ fontSize: "0.85rem" }}>
                  <Link to={`/${link}`}>{link.toUpperCase()}</Link>
                </Nav>
              </Nav.Item>
            )
          })
        }
      </header>
    </Nav>
  );
}

export default NavBar;
