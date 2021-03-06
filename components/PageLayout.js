import { Navbar, Form, FormControl, Button, Dropdown, ButtonGroup, Image, Nav, NavDropdown } from 'react-bootstrap'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { BiWorld, BiHomeAlt, BiWrench } from 'react-icons/bi'
import BACKEND_URL from './backendurl.js'


export default class PageLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarCollapsed: true,
      levels: [],
    }

  }

  componentDidMount() {
    this.getLevels();
  }

  getLevels() {
    fetch(BACKEND_URL + 'bfbb-site/levels')
      .then(res => res.json())
      .then(data => {
        if (data.success == true)
          this.setState({ levels: data.info })
      });
  }

  render() {
    return (<>

      <Navbar bg="dark" variant="dark" expand="lg" style={{ zIndex: 10000000 }}>
        <Navbar.Brand href="/">BfBB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Speedrunning" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.speedrun.com/bfbb">Leaderboards</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/levels">Levels</NavDropdown.Item>
              <NavDropdown.Item href="/strats">Strats</NavDropdown.Item>
              <NavDropdown.Item href="/routes">Routes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/routes">Tutorials</NavDropdown.Item>


            </NavDropdown>
            <Nav.Link href="/randomizer">Randomizer</Nav.Link>
            <Nav.Link href="https://blitz.bobhub.net">Blitz</Nav.Link>
            <Nav.Link href="/bingo">Bingo</Nav.Link>
            <Nav.Link href="/modding">Modding</Nav.Link>
            <Nav.Link href="/tas">TAS</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div style={{ display: "flex", position: "relative", height: "calc(100% - 56px)", whiteSpace: "pre-wrap" }}>
        <ProSidebar
          collapsed={this.state.sidebarCollapsed}
          breakPoint="md"
          onPointerEnter={() => this.setState({ sidebarCollapsed: false })}
          onPointerLeave={() => this.setState({ sidebarCollapsed: true })}
        >
          <SidebarHeader>
            <SidebarContent>
              <Menu iconShape="circle">
                <MenuItem
                  icon={<BiHomeAlt />}
                ><a href="/">Home</a>
                </MenuItem>
              </Menu>
            </SidebarContent>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem
                icon={<BiWorld />}
              ><a href="/levels">Levels</a>
              </MenuItem>
              <MenuItem
                icon={<BiWrench />}
              ><a href="/strats">Strats</a>
              </MenuItem>
            </Menu>

          </SidebarContent>
          <SidebarFooter>
            {this.state.sidebarCollapsed == false &&
              <Menu iconShape="square">
                <MenuItem onClick={() => this.setState({ sidebarCollapsed: true })} icon={<FaArrowLeft />} >Collapse</MenuItem>
              </Menu>
            }

            {this.state.sidebarCollapsed == true &&
              <Menu iconShape="square">
                <MenuItem onClick={() => this.setState({ sidebarCollapsed: false })} icon={<FaArrowRight />} >Expand</MenuItem>
              </Menu>
            }

          </SidebarFooter>
        </ProSidebar>
        <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
          {this.props.children}
        </div>

      </div>

      <style>{`
          $sidebar-bg-color: #ffffff;
          `}</style>

    </>);
  }
}

/*







<MenuItem
                icon={<FaTachometerAlt />}
              ><a href="/">Dashboard</a>
              </MenuItem>

              <MenuItem
                icon={<FaMapMarkedAlt />}
              ><a href="/map">Map</a>
              </MenuItem>

              <MenuItem
                icon={<FaSearchLocation />}
              ><a href="/query">Query</a>
              </MenuItem> */