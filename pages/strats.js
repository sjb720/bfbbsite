import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button, Container, Image, Badge, Card, Accordion } from 'react-bootstrap'
import PageLayout from '../components/PageLayout.js'
import Area from '../components/Area.js'
import BACKEND_URL from '../components/backendurl.js'
import ScrollAnimation from 'react-animate-on-scroll';
import InformationContainer from '../components/InformationContainer.js'
import StratAccordian from '../components/StratAccordian.js'

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
          <InformationContainer>

            <h1>All Strats</h1>
            <StratAccordian strats={this.state.strats}>

            </StratAccordian>
          </InformationContainer>

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