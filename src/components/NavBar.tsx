import { NavbarBrand } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

interface Props {
  title: string,
  links: string[]
}

const NavBar = ({ title, links }: Props) => {

  return (
    <Nav className="justify-content-between border-bottom
      border-dark border-opacity-75 fixed-top bg-light px-5 p-2"
      activeKey="/home"
    >
      <div className='d-flex'>
        <NavbarBrand><p className='m-0 fs-4'>Jensen.Y</p></NavbarBrand>
      </div>
      <div className='d-flex flex-row'>
        {
          links.map((link: string) => {
            return (
              <Nav.Item>
                <Nav.Link href={`/#/${link}`}>{link}</Nav.Link>
              </Nav.Item>
            )
          })
        }
      </div>
    </Nav>
  );
}

export default NavBar;
