import { Button, Navbar, Nav, NavItem, Form, FormControl, NavDropdown, MenuItem } from 'react-bootstrap'

const JumpLabel = (props) => (
    <a href={props.link} target="_blank" style={{display:"inline-block", paddingRight:5,paddingLeft:5}}><img
    alt=""
    src={props.image}
    width="40"
    height="40"
    className="d-inline-block align-top"
  /></a>
        



);
export default JumpLabel;
