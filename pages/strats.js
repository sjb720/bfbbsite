import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button, Container, Image, Badge, Card, Accordion } from 'react-bootstrap'
import PageLayout from '../components/PageLayout.js'
import Area from '../components/Area.js'
import BACKEND_URL from '../components/backendurl.js'
import ScrollAnimation from 'react-animate-on-scroll';

const information_container = { backgroundColor: "#111111aa", borderRadius: 20, filter: "drop-shadow(0 0 0.75rem black)", padding: 20, paddingBottom: 10, marginTop: 10 }

export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      strats: [],
    }

  }

  componentDidMount() {

    this.getLevelData();

  }

  getLevelData() {


    fetch(BACKEND_URL + 'bfbb-site/strats/')
      .then(res => res.json())
      .then(data => {
        if (data.success == true && data.info.length > 0) {
          this.setState({ strats: data.info })

        } //fail here
      });

  }


  render() {
    if (this.state.strats == null)
      return (<div style={{ color: "#aabfff" }}><title>Loading Strat...</title>Loading strats...</div>)

    return (
      <PageLayout>

        <title>Strats</title>
        <div class="bg-image">
        </div>

        <Container>
          <div style={information_container}>


            <Accordion>

              {this.state.strats.map(strat =>
                <Card bg="dark">
                  <Accordion.Toggle as={Card.Header} eventKey={strat.name} style={{ cursor: "pointer" }}>
                    <span style={{ fontSize: 26 }}>{strat.name}</span>

                    <Button variant="outline-primary" style={{ float: "right" }} onClick={() => window.open('/strats/' + strat.name, '_blank')}>See more</Button>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={strat.name}>
                    <Card.Body>{strat.description}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              )}
            </Accordion>
          </div>

        </Container>



        <style>{`

          .bg-image{

            background-image: url("/bg-ocean.jpg");

            filter: blur(8px);
            -webkit-filter: blur(8px);

            height: 100%;

            /* Center and scale the image nicely */
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: fixed;
            left: 0;
            right: 0;
            z-index: -10;

          }
        `}</style>
      </PageLayout>
    )
  }

}