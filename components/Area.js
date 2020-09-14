import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button, Container, Image, Badge, Card, Accordion } from 'react-bootstrap'
import BACKEND_URL from './backendurl.js'
import ScrollAnimation from 'react-animate-on-scroll';
import StratAccordian from './StratAccordian.js';

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
            <StratAccordian strats={this.state.strats}></StratAccordian>

        </div>);
    }
}