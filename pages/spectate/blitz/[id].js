import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button,Image } from 'react-bootstrap'
import BlitzBoard from '../../../components/BlitzBoard.js'

const BACKEND_IP = "https://bfbbhub.herokuapp.com";
//const BACKEND_IP = "http://172.16.127.245:3001";

const POLLING_RATE_MILLI_SECONDS = 5000;

export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      room:null,
      errorLoading:false,
    }

  }

  static getInitialProps({ query }) {
    return { query }
  }

    //Refreshes your room periodically
    refreshRoom() {
      if (this.state.room == null) return; //whered the room go?
      console.log("Getting new room data...")
  
      fetch(BACKEND_IP + '/blitz/getroom/' + this.state.room.id)
        .then(res => res.json())
        .then(data => {
          this.setState({ room: data.room })
        });
    }

  componentDidMount() {

    
    fetch(BACKEND_IP+'/blitz/getroom/' + this.props.query.id)
      .then(res => res.json())
      .then(data => {
        if(data.success==true){
          this.setState({room:data.room})

          const interval = setInterval(() => {
            this.refreshRoom();
          }, POLLING_RATE_MILLI_SECONDS);
        }else
          this.setState({errorLoading:true})
      });

  }


  render() {
    if (this.state.room == null)
      return (
      <div>
        {this.state.errorLoading==false ? <div style={{ color: "#aabfff" }}>Loading room {this.props.query.id}...</div> : 
        
        <div style={{textAlign:"center",position:"relative",top:"25vh",color:"#5a7bfd"}}><Image src="/error.png"></Image><h1>This room does not exist.</h1></div>}
      </div>)

    return (
      <div>
        <title>BfBB Blitz: Spectating</title>
        <br></br>
            <BlitzBoard pid="lol" room={this.state.room} collect_function={(e)=>{console.log("nope")}}></BlitzBoard>

          </div>
    )
  }

}