import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { DropdownButton, Dropdown, Button,Image } from 'react-bootstrap'
import BlitzBoard from '../../../components/BlitzBoard.js'

const BACKEND_IP = "https://bfbbhub.herokuapp.com";
//const BACKEND_IP = "http://172.16.127.245:3001";

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

  componentDidMount() {

    
    fetch(BACKEND_IP+'/blitz/getroom/' + this.props.query.id)
      .then(res => res.json())
      .then(data => {
        if(data.success==true)
          this.setState({room:data.room})
        else
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