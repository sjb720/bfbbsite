import { Row,Col } from 'react-bootstrap';
import BattleShipGrid from '../components/BattleShipGrid.js'

const BattleShipBoard = (props) => (
    <div>
        <h2>{props.player.display_name}'s Board</h2>
        
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", width: 750, justifyContent: 'space-between' }}>
                        {props.player.board.tasks.map(task =>
                            <BattleShipGrid name={task.name} type={task.type} />
                        )}
                        </div>
    </div>
    
    
);

export default BattleShipBoard;
