import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button, Container, Image, Badge, Card, Accordion, FormControl } from 'react-bootstrap'
import BACKEND_URL from './backendurl.js'

export default class AddArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            levels: [],
            level: "",
            name: "",
            internal_name: "",
            sock_count: null,
            spatula_count: null
        }
    }

    componentDidMount() {
        this.getLevels();
    }

    getLevels() {
        {

            fetch(BACKEND_URL + 'bfbb-site/levels')
                .then(res => res.json())

                .then(data => {
                    if (data.success == true) {
                        this.setState({ levels: data.info, level: data.info[0].name })
                    }
                })


        }
    }

    addArea() {
        let data = { 
            username:window.sessionStorage.getItem("username"),
            token:window.sessionStorage.getItem("token"),
            name:this.state.name,
            level:this.state.level,
            internal_name:this.state.internal_name, 
            sock_count: this.state.sock_count,
            spatula_count: this.state.spatula_count
        }

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }


        fetch(BACKEND_URL + 'bfbb-site/areas/post', options)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.props.getDataMethod()
                    this.setState({
                        name: "",
                        internal_name:"",
                        sock_count:0,
                        spatula_count:0
                    })
                } else {
                    console.log(data.error)
                }
            });
    }


    render() {
        return (
        <div style={{backgroundColor:"#000000",padding:20, textAlign:"left", borderRadius:20}}>
            <h2>Add an area</h2>
            <Dropdown >
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    {this.state.level}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ position: "relative", zIndex: 10000 }}>
                    {this.state.levels.map(level =>
                        <Dropdown.Item onClick={() => this.setState({ level: level.name })}>{level.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <FormControl
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
            />
            <FormControl
                onChange={e => this.setState({ internal_name: e.target.value.toUpperCase() })}
                value={this.state.internal_name}
                placeholder="Internal Name (ie; HB01, HB02, JF01, etc)"
                aria-label="Name"
                aria-describedby="basic-addon1"
            />
            <FormControl
                onChange={e => this.setState({ sock_count: isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value) })}
                value={this.state.sock_count}
                placeholder="Sock count"
                aria-label="Sock count"
                aria-describedby="basic-addon1"
            />
            <FormControl
                onChange={e => this.setState({ spatula_count: isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value) })}
                value={this.state.spatula_count}
                placeholder="Spatula Count"
                aria-label="Spatula Count"
                aria-describedby="basic-addon1"
            />
            <br></br>
            <Button variant="success" block onClick={()=>this.addArea()}>
                Add area
            </Button>
        </div>);
    }
}