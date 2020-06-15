import SocialMediaButton from '../components/SocialMediaButton';
import { Button, Navbar, Nav, NavItem, Form, FormControl, NavDropdown, MenuItem } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';

const Header = () => (
  <Navbar className="color-nav" variant="dark" expand="lg" style={{ paddingLeft: '10vw', paddingRight: '10vw' }}>
    <Navbar.Brand href="/">
      <div class="animate__animated animate__fadeIn">
      <img
          alt=""
          src="/logo_256.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      </div>



    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" style={{ fontWeight: "bold" }}>
      <Nav className="mr-auto">
      <NavDropdown title="Projects" id="basic-nav-dropdown" style={{zIndex:9999}}>
          <NavDropdown.Item href="/bfbb-history">
            How Speedrunning Revived BfBB
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="https://www.ownaj.com/pages/shift">Merch</Nav.Link>
      </Nav>
      <Nav>
        <div>
        <SocialMediaButton image="/twitter.png" link="https://twitter.com/shiftposting" />
        <SocialMediaButton image="/speedrun.png" link="https://www.speedrun.com/user/SHiFT" />
        <SocialMediaButton image="/youtube.png" link="https://www.youtube.com/channel/UC9Y0uUKJ5y78QbhHbntAyFQ" />
        <SocialMediaButton image="/twitch.png" link="https://twitch.tv/shift" />
        </div>
        
      </Nav>
    </Navbar.Collapse>

    <style>
      {`
        .color-nav {
          background-color: rgb(111, 65, 156);
        }
      `}
    </style>

  </Navbar>
);

export default Header;