import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { Accordion, Card, Button } from 'react-bootstrap'
import description_to_html from '../components/description_to_html.js'

export default class StratAccordian extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Accordion>

                {this.props.strats.map(strat =>
                    <Card bg="dark">
                        <Accordion.Toggle as={Card.Header} eventKey={strat.name} style={{ cursor: "pointer" }}>
                            <span style={{ fontSize: 26 }}>{strat.name}</span>

                            <Button variant="outline-primary" style={{ float: "right" }} onClick={() => window.open('/strats/' + strat.name, '_blank')}>See more</Button>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={strat.name}>
                            <Card.Body dangerouslySetInnerHTML={{ __html: description_to_html(strat.description) }}></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )}
            </Accordion>
        );
    }
}