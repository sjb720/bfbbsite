import { Tooltip,OverlayTrigger } from 'react-bootstrap';

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.name}
    </Tooltip>
  );

const BattleShipGrid = (props) => (
    <div>
        <OverlayTrigger
    placement="right"
    delay={{ show: 100, hide: 400 }}
    overlay={renderTooltip(props)}>

        <div class="butt" style={{backgroundImage:('url("'+props.type+'/'+props.name+'.png'+'")')}}>
        </div>
        
    </OverlayTrigger>
        <style>{`
          .butt {
            border: 1px outset white;
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
            background-color: red;
            color:white;
         }

          `}</style>
    </div>
    
    
);

export default BattleShipGrid;
