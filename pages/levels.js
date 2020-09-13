import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button, Container, Image, Badge, Card, Accordion } from 'react-bootstrap'
import PageLayout from '../components/PageLayout.js'
import Area from '../components/Area.js'
import BACKEND_URL from '../components/backendurl.js'
import ScrollAnimation from 'react-animate-on-scroll';

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

        <title>Levels</title>
        <div class="bg-image">
        </div>

        <Container>



          {this.state.levels.map(level =>
            <div class="wiggle">
              <a href={"/levels/" + level.name}>
                <Image fluid src={"/level-banners/" + level.name + ".png"}
                  href={"/levels/" + level.name}
                  style={{ borderRadius: 50, margin: 10, cursor: "pointer" }}
                ></Image>
              </a>
            </div>

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

          .wiggle:hover {
            animation: wiggle 0.5s ease;
            animation-iteration-count: 1;
          }

          @keyframes wiggle {
            20%  { transform: translateX(8px);  }
            40%  { transform: translateX(-8px); }
            60%  { transform: translateX(4px);  }
            80%  { transform: translateX(-2px); }
            100% { transform: translateX(0);    }
          }
        `}</style>
      </PageLayout>
    )
  }

}