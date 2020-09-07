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
      areas: [],
      strats: [],
    }

  }

  static getInitialProps({ query }) {
    return { query }
  }

  componentDidMount() {

    this.getLevelData();

  }

  getLevelData() {


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

  getStrats(areas) {
    {

      areas.map(area => {

        fetch(BACKEND_URL + 'bfbb-site/area/strats/' + area.internal_name)
          .then(res => res.json())
          .then(data => {
            if (data.success == true && data.info.length > 0) {
              this.setState({ strats: data.info })
            }
          })
      })

    }
  }


  render() {
    if (this.state.level == null)
      return (<div style={{ color: "#aabfff" }}><title>Loading Level...</title>Loading level {this.props.query.id}...</div>)

    return (
      <PageLayout>
        <div class="bg-image">
        </div>
        <title>Level | {this.state.level.name}</title>

        <Container>

          <Image style={{ borderRadius: "100px 0px", filter: "drop-shadow(0 0 0.75rem black)", paddingTop: 50, paddingBottom: 10 }} src={"/level-banners/" + this.state.level.name + ".png"} fluid></Image>


            <div style={information_container}>
              <h1>
                {this.state.level.name}
                <span class="badge badge-primary" style={{ marginLeft: 10 }}>{this.state.level.sock_count} Socks</span>
                <span class="badge badge-warning" style={{ marginLeft: 10 }}>{this.state.level.spatula_requirement} Spatulas to Enter</span>
                <span class="badge badge-info" style={{ marginLeft: 10 }}>{this.state.level.secondary_character}</span>
              </h1>
              <p>
                {this.state.level.description}
              </p>
            </div>


          {this.state.areas.map(area =>

              <div style={information_container}>
                <Area area={area}></Area>
              </div>

          )}


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