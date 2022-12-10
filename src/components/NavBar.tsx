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
      border-dark border-opacity-75 fixed-top bg-light px-5 py-1"
      activeKey="/home"
    >
      <header className='d-flex flex-row'>
        {
          links.map((link: string) => {
            return (
              <Nav.Item>
                <Nav.Link className="px-3" style={{ fontSize: "0.85rem" }}
                  href={`/#/${link}`}>{link.toUpperCase()}</Nav.Link>
              </Nav.Item>
            )
          })
        }
      </header>
    </Nav>
  );
}

export default NavBar;
