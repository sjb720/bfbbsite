import { Navbar, Form, FormControl, Button, Dropdown, ButtonGroup, Image } from 'react-bootstrap'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { BiWorld, BiHomeAlt } from 'react-icons/bi'
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

      <div style={{ display: "flex", position: "relative", height: "calc(100% - 0px)" }}>
        <ProSidebar
          collapsed={this.state.sidebarCollapsed}
          breakPoint="md">
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
              <SubMenu icon={<BiWorld />} title="Levels" >
                {this.state.levels.map(level => <MenuItem onClick={() => location.replace('/levels/' + level.name)}>{level.name}</MenuItem>)}
              </SubMenu>
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


      <Navbar className="bg-dark justify-content-between">
        <Form inline >
          <Image onClick={() => document.location.href = "/"} src="/crash_header_logo.png" height="40"></Image>
        </Form>
        <Form inline>
          <Dropdown as={ButtonGroup}>
            <Button variant="primary"></Button>

            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

            <Dropdown.Menu id="dropdown-menu-align-right" alignRight>
              <Dropdown.Item href="/settings">Settings</Dropdown.Item>
              <Dropdown.Item onClick={() => this.logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Navbar>




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