import Link from 'next/link';
import { headerButton } from './buttons.module.css'
import { Button, Navbar, Nav, NavItem, Form, FormControl, NavDropdown, MenuItem } from 'react-bootstrap'

const headerStyle = {
  textAlign:'center',
  left: 0,
  right: 0,
  backgroundColor: 'rgba(11, 23, 82, 0.8)',
  padding: 4,
};

const linkStyle = {
  marginRight: 1
};

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" style={{position:"fixed",top:0,zIndex:5,width:'100%'}}>
  <Navbar.Brand href="/">BfBB</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Speedrunning" id="basic-nav-dropdown">
        <NavDropdown.Item href="/">Levels</NavDropdown.Item>
        <NavDropdown.Item href="/">Tutorials</NavDropdown.Item>
        <NavDropdown.Item href="/">Strats</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://speedrun.com/bfbb">Leaderboards</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="https://discord.gg/8BKC3US">Discord</Nav.Link>
      <Nav.Link href="https://twitter.com/bfbbcommunity">Twitter</Nav.Link>
      <Nav.Link href="https://www.twitch.tv/directory/game/SpongeBob%20SquarePants%3A%20Battle%20for%20Bikini%20Bottom">Streams</Nav.Link>
      <Nav.Link href="/">Modding</Nav.Link>
      <Nav.Link href="/">Randomizer</Nav.Link>
      <Nav.Link href="/">Bingo</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
);

export default Header;