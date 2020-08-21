import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const BACKEND_IP = "https://crash-backend.herokuapp.com";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip-2" {...props}>
    {props.collected==true &&
      <div style={{color:props.collector.color,fontWeight:"bold"}}>Collected by {props.collector.display_name}</div>
    }
    {props.name}
  </Tooltip>
);

export default class BlitzGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collected: false,
    }
  }

  onClick() {

    let data = { pid: this.props.pid, rid: this.props.rid, collectable_name: this.props.name }

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }


    fetch(BACKEND_IP+'/blitz/collect', options)
      .then(res => res.json())
      .then(data => {
        this.setState({ room: data })
        if (data.success)
          this.setState({collected:true});
      });

  }

  render() {
    return (
      <div>
        <OverlayTrigger
          placement="top"
          
          overlay={renderTooltip(this.props)}>
          <div>
            {!this.props.collected &&
              <div class="butt" onClick={() => this.onClick()} style={{ backgroundImage: ('url("' + this.props.type + '/' + this.props.name + '.png' + '")') }} />
            }

            {this.props.collected &&
              <div class="butt" onClick={() => this.onClick()} style={{backgroundColor: this.props.collector.color,boxShadow:"inset 0px 0px 0px 3px"+this.props.collector.color, backgroundImage: ('url("' + this.props.type + '/' + this.props.name + '.png' + '")') }} />
            }
          </div>



        </OverlayTrigger>
        <style>{`
          .butt {
            
            padding-top:100%;
            cursor:pointer;
            width:100%
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            background-blend-mode: multiply;
         }
         
         .butt:hover {
            background-color: grey;
            color:white;
         }



          `}</style>
      </div>
    )
  }

}