import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button, Container, Image, Badge, Card, Accordion } from 'react-bootstrap'
import PageLayout from '../../components/PageLayout.js'
import Area from '../../components/Area.js'
import BACKEND_URL from '../../components/backendurl.js'
import ScrollAnimation from 'react-animate-on-scroll';
import InformationContainer from '../../components/InformationContainer.js'
import description_to_html from '../../components/description_to_html.js';

export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      route: null
    }

  }

  static getInitialProps({ query }) {
    return { query }
  }

  componentDidMount() {

    this.getRouteData();

  }

  getRouteData() {


    fetch(BACKEND_URL + 'bfbb-site/route/' + this.props.query.id)
      .then(res => res.json())
      .then(data => {
        if (data.success == true && data.info.length > 0) {
          this.setState({ route: data.info[0] })

        } //fail here
      });

  }


  render() {
    if (this.state.route == null)
      return (<div style={{ color: "#aabfff" }}><title>Loading route...</title>Loading route {this.props.query.id}...</div>)

    return (
      <PageLayout>

        <title>Strat | {this.state.route.name}</title>
        <div class="bg-image">
        </div>

        <Container>

          <ScrollAnimation animateIn="zoomIn" animateOnce="true">
            <InformationContainer>
              <h1>{this.state.route.name}<span class="badge badge-dark" style={{ marginLeft: 10 }}>{this.state.route.category}</span> <Badge variant="primary">{this.state.route.difficulty}</Badge></h1>
              <p dangerouslySetInnerHTML={{ __html: description_to_html(this.state.route.description) }}></p>
              <Accordion>
                {this.state.route.steps.map(step =>
                  <Card bg="dark">
                    <Accordion.Toggle as={Card.Header} eventKey={step.name} style={{ cursor: "pointer" }}>
                      <span style={{ fontSize: 26 }}>{step.name} <Badge variant="warning">{step.spatulas} Spatulas</Badge> <Badge variant="light">{step.socks} Socks</Badge></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={step.name}>
                      <Card.Body>
                        {step.description}
                        <br></br>
                        {step.videos.map(video =>
                          <iframe style={{border:"none", padding:10}} width="480" height="270"
                            src={"https://www.youtube.com/embed/" + (/[^/]*$/.exec(video)[0])}>
                          </iframe>)}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )}
              </Accordion>

            </InformationContainer>
          </ScrollAnimation>

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