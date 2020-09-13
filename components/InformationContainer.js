import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button, Container, Image, Badge, Card, Accordion } from 'react-bootstrap'
import BACKEND_URL from './backendurl.js'
import ScrollAnimation from 'react-animate-on-scroll';

const information_container = { 
    backgroundColor: "#111111aa", borderRadius: 20, 
    filter: "drop-shadow(0 0 0.75rem black)", padding: 20, 
    paddingBottom: 10, marginTop: 10 }

export default class Area extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
        <div style={information_container}>
            {this.props.children}
        </div>);
    }
}