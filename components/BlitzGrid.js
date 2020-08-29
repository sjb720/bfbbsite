import { Tooltip, OverlayTrigger } from 'react-bootstrap';

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
      
    }
  }

  onClick() {
    this.props.collect_function(""+this.props.name);
  }

  render() {
    return (
      <div>
        <OverlayTrigger
          placement="top"
          
          overlay={renderTooltip(this.props)}>
          <div>
            {!this.props.collected &&
              <div class="butt" onClick={() => this.onClick()} style={{ backgroundImage: ('url("/' + this.props.type + '/' + this.props.name + '.png' + '")') }} />
            }

            {this.props.collected &&
              <div class="butt" onClick={() => this.onClick()} style={{backgroundColor: this.props.collector.color,boxShadow:"inset 0px 0px 0px 3px"+this.props.collector.color, backgroundImage: ('url("/' + this.props.type + '/' + this.props.name + '.png' + '")') }} />
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