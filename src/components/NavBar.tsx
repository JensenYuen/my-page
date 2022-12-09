import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

interface Props {
  title: string,
  links: string[]
}

const NavBar = ({ title, links }: Props) => {

  return (
    <Nav className="justify-content-center border-bottom border-dark border-opacity-75 p-2 fixed-top bg-light" activeKey="/home">
      {
        links.map((link: string) => {
          return (
            <Nav.Item>
              <Nav.Link href={`/#/${link}`}>{link}</Nav.Link>
              {/* <Link to={`/${link}`}>{link}</Link> */}
            </Nav.Item>
          )
        })
      }
    </Nav>
  );
}

export default NavBar;
