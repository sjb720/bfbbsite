import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button, Container, Image, Badge, Card, Accordion } from 'react-bootstrap'
import PageLayout from '../../components/PageLayout.js'
import Area from '../../components/Area.js'
import BACKEND_URL from '../../components/backendurl.js'
import ScrollAnimation from 'react-animate-on-scroll';

const information_container = { backgroundColor: "#111111aa", borderRadius: 20, filter: "drop-shadow(0 0 0.75rem black)", padding: 20, paddingBottom: 10, marginTop: 10 }

export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      level: null,
      area: null,
      strat: null,
    }

  }

  static getInitialProps({ query }) {
    return { query }
  }

  componentDidMount() {

    this.getLevelData();

  }

  getLevelData() {


    fetch(BACKEND_URL + 'bfbb-site/strat/' + this.props.query.id)
      .then(res => res.json())
      .then(data => {
        if (data.success == true && data.info.length > 0) {
          this.setState({ strat: data.info[0] })
          console.log("Got strat, getting area " + data.info[0].area)
          fetch(BACKEND_URL + 'bfbb-site/area/' + data.info[0].area)
            .then(res => res.json())
            .then(data2 => {
              if (data2.success == true && data2.info.length > 0) {
                this.setState({ area: data2.info[0] })
                console.log("Got area, getting level...")
                fetch(BACKEND_URL + 'bfbb-site/level/' + this.state.area.level)
                  .then(res => res.json())
                  .then(data => {
                    if (data.success == true && data.info.length > 0) {
                      this.setState({ level: data.info[0] })
                      console.log("Got level, done!")
                    }//fail here
                  });
              } //fail here
            });
        } //fail here
      });

    fetch(BACKEND_URL + 'bfbb-site/level/' + this.props.query.id)
      .then(res => res.json())
      .then(data => {
        if (data.success == true && data.info.length > 0)
          this.setState({ level: data.info[0] })
      });

    fetch(BACKEND_URL + 'bfbb-site/level/areas/' + this.props.query.id)
      .then(res => res.json())
      .then(data => {
        if (data.success == true && data.info.length > 0) {
          this.setState({ areas: data.info })
          this.getStrats(data.info);
        }
      });
  }


  render() {
    if (this.state.level == null)
      return (<div style={{ color: "#aabfff" }}><title>Loading Strat...</title>Loading strat {this.props.query.id}...</div>)

    return (
      <PageLayout>

        <title>Strat | {this.state.strat.name}</title>
        <div class="bg-image">
        </div>

        <Container>

          <Image style={{ borderRadius: "100px 0px", filter: "drop-shadow(0 0 0.75rem black)", paddingTop: 50, paddingBottom: 10 }} src={"/level-banners/" + this.state.level.name + ".png"} fluid></Image>

          <ScrollAnimation animateIn="zoomIn" animateOnce="true">
            <div style={information_container}>
              <h1>{this.state.strat.name}<span class="badge badge-dark" style={{ marginLeft: 10 }}>{this.state.area.internal_name}</span></h1>
              <p>{this.state.strat.description}</p>
              <Accordion>
                {this.state.strat.methods.map(method =>
                  <Card bg="dark">
                    <Accordion.Toggle as={Card.Header} eventKey={method.name} style={{cursor:"pointer"}}>
                      <span style={{ fontSize: 26 }}>{method.name}</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={method.name}>
                      <Card.Body>
                        {method.description}
                        <br></br>
                        {method.videos.map(video=><a href={video}>Video example</a>)}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                )}
              </Accordion>

            </div>
          </ScrollAnimation>

        </Container>



        <style>{`

          .bg-image{

            background-image: url("/level-backgrounds/`+ this.state.level.name + `.png");

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