import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button, Container, Image, Badge, Card, Accordion } from 'react-bootstrap'
import BACKEND_URL from '../backendurl.js'
import ScrollAnimation from 'react-animate-on-scroll';

export default class Area extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            strats: []
        }
    }

    componentDidMount() {
        this.getStrats();
    }

    getStrats() {
        {

            fetch(BACKEND_URL + 'bfbb-site/area/strats/' + this.props.area.internal_name)
                .then(res => res.json())

                .then(data => {
                    if (data.success == true && data.info.length > 0) {
                        this.setState({ strats: data.info })
                    }
                })


        }
    }


    render() {
        return (<div>
            <h2>
                {this.props.area.name}
                <span class="badge badge-dark" style={{ marginLeft: 10 }}>{this.props.area.internal_name}</span>
                <span class="badge badge-primary" style={{ marginLeft: 10 }}>{this.props.area.sock_count} Socks</span>
                <span class="badge badge-warning" style={{ marginLeft: 10 }}>{this.props.area.spatula_count} Spatulas</span>
            </h2>
            <Accordion>
                {this.state.strats.map(strat =>
                    <Card bg="dark">
                        <Accordion.Toggle as={Card.Header} eventKey={strat.name} style={{cursor:"pointer"}}>
                            <span style={{fontSize:26}}>{strat.name}</span>
                            
                            <Button variant="outline-primary" style={{float:"right"}} onClick={()=>window.open('/strats/'+strat.name,'_blank')}>See more</Button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={strat.name}>
                            <Card.Body>{strat.description}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )}
            </Accordion>

        </div>);
    }
}