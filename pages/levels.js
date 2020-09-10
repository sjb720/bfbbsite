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
      levels: [],
    }

  }

  componentDidMount() {

    this.getLevelData();

  }

  getLevelData() {


    fetch(BACKEND_URL + 'bfbb-site/levels/')
      .then(res => res.json())
      .then(data => {
        if (data.success == true && data.info.length > 0) {
          this.setState({ levels: data.info })

        } //fail here
      });

  }


  render() {
    if (this.state.levels == null)
      return (<div style={{ color: "#aabfff" }}><title>Loading Strat...</title>Loading strats...</div>)

    return (
      <PageLayout>

        <title>Strats</title>
        <div class="bg-image">
        </div>

        <Container>



          {this.state.levels.map(level =>
            <a href={"/levels/" + level.name}>
              <Image fluid src={"/level-banners/" + level.name + ".png"}
                href={"/levels/" + level.name}
                style={{ borderRadius: 50, margin: 10, cursor: "pointer" }}
                ></Image>
            </a>

          )}

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