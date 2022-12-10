import { Button, Container, Navbar, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Props {
  title: string,
  links: string[]
}

const NavBar = ({ title, links }: Props) => {
  const language = window.navigator.language
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  }

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
      <Nav style={{ fontSize: "0.85rem" }}>
        <Nav className="me-auto">
          {renderLinks()}
        </Nav>
        <Nav>
          <Nav.Link onClick={() => changeLanguage('en')}>English</Nav.Link>
          <Nav.Link onClick={() => changeLanguage('ja')}>日本語</Nav.Link>
        </Nav>
      </Nav>
    </div>
  )
}

export default NavBar;
