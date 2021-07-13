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
          var area_temp=data.info[0].area;

          if(area_temp=="GLOBAL")
          area_temp="HB01";

          console.log("Got strat, getting area " + area_temp)
          fetch(BACKEND_URL + 'bfbb-site/area/' + area_temp)
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

          <Image style={{ borderRadius: 50, filter: "drop-shadow(0 0 0.75rem black)", marginTop: 50, marginBottom: 10 }} src={"/level-banners/" + this.state.level.name + ".png"} fluid></Image>

          <ScrollAnimation animateIn="zoomIn" animateOnce="true">
            <InformationContainer>
              <h1>{this.state.strat.name}<span class="badge badge-dark" style={{ marginLeft: 10 }}>{this.state.area.internal_name}</span></h1>
              <p dangerouslySetInnerHTML={{ __html: description_to_html(this.state.strat.description) }}></p>
              <Accordion>
                {this.state.strat.methods.map(method =>
                  <Card bg="dark">
                    <Accordion.Toggle as={Card.Header} eventKey={method.name} style={{ cursor: "pointer" }}>
                      <span style={{ fontSize: 26 }}>{method.name}</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={method.name}>
                      <Card.Body>
                        {method.description}
                        <br></br>
                        {method.videos.map(video => 
                           <div style={{display:"inline-block",marginRight:10,marginLeft:10}}>
                           <iframe width="320" height="180" style={{border:"none"}}
                               src={"https://www.youtube.com/embed/" + (/[^/]*$/.exec(video)[0])}>
                           </iframe>
                       </div>
                          )}
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