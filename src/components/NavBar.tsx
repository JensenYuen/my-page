import { Button, Container, Navbar, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Props {
  title: string,
  links: string[],
  onChangeLanguage: (lng: string) => void
}

const NavBar = ({ title, links, onChangeLanguage }: Props) => {
  const renderLinks = () => {
    const link = links.map((link: string) => {
      return (
        <Nav.Item key={link}>
          <Nav.Link className="px-3" style={{ fontSize: "0.85rem" }}>
            <Link to={`/${link}`}>{link.toUpperCase()}</Link>
          </Nav.Link>
        </Nav.Item>
      )
    })

    return link;
  }

  return (
    <div className='border-bottom shadow border-dark border-opacity-50 fixed-top bg-light px5 py-1'>
      <Container>
        <Nav style={{ fontSize: "0.85rem" }}>
          <Nav className="me-auto">
            {renderLinks()}
          </Nav>
          <Nav>
            <Nav.Link onClick={() => onChangeLanguage('en')}>English</Nav.Link>
            <Nav.Link onClick={() => onChangeLanguage('ja')}>日本語</Nav.Link>
          </Nav>
        </Nav>
      </Container>
    </div>
  )
}

export default NavBar;
