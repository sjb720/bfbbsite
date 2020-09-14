import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button, Container, Image, Badge, Card, Accordion, FormControl } from 'react-bootstrap'
import BACKEND_URL from './backendurl.js'

export default class AddStrat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            areas: [],
            area: "",
            name: "",
            description: "",
        }
    }

    componentDidMount() {
        this.getAreas();
    }

    getAreas() {
        {

            fetch(BACKEND_URL + 'bfbb-site/areas')
                .then(res => res.json())

                .then(data => {
                    if (data.success == true) {
                        this.setState({ areas: data.info, area: data.info[0].internal_name })
                    }
                })


        }
    }

    addStrat() {
        let data = { 
            username:window.sessionStorage.getItem("username"),
            token:window.sessionStorage.getItem("token"),
            name:this.state.name,
            area:this.state.area,
            description:this.state.description,
        }

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }


        fetch(BACKEND_URL + 'bfbb-site/strats/post', options)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.props.getDataMethod()
                    this.setState({
                        name: "",
                        description:"",
                    })
                } else {
                    console.log(data.error)
                }
            });
    }


    render() {
        return (
        <div style={{backgroundColor:"#000000",padding:20, textAlign:"left", borderRadius:20}}>
            <h2>Add a strat</h2>
            <Dropdown >
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    {this.state.area}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ position: "relative", zIndex: 10000 }}>
                    <Dropdown.Item onClick={() => this.setState({ area: "GLOBAL" })}>GLOBAL</Dropdown.Item>
                    {this.state.areas.map(area =>
                        <Dropdown.Item onClick={() => this.setState({ area: area.internal_name })}>{area.internal_name}</Dropdown.Item>
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
            <p>Description allow you to insert links! We encourage you do this to help people navigate. Here is the syntax:</p>
            <ul>
                <li dangerouslySetInnerHTML={{__html:"{link;<span style='color:blue'>[LINK URL]</span>;<span style='color:green'>[TEXT YOU DESIRE]</span>}"}}>
                </li>
                <li dangerouslySetInnerHTML={{__html:"{link;<span style='color:blue'>/strats/Cruise Boosting</span>;<span style='color:green'>Cruise Boosting</span>} => <a href='/strats/Cruise Boosting'>Cruise Boosting</a>"}}>
                </li>
            </ul>
            <FormControl
                as="textarea"
                rows="6"
                style={{whiteSpaces:"pre-wrap"}}
                onChange={e => this.setState({ description: e.target.value})}
                value={this.state.description}
                placeholder="Type a description here. You cannot use < or >. Both of these characters are banned."
            />
            <br></br>
            <Button variant="success" block onClick={()=>this.addStrat()}>
                Add strat
            </Button>
        </div>);
    }
}