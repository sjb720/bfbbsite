import { Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import BlitzGrid from '../components/BlitzGrid.js'



const BlitzBoard = (props) => (
    <div>
        <Row style={{ paddingLeft: 30, paddingBottom: 10, width: "100%", textAlign: "center" }}>
            {props.room.players.sort((a, b) => a.score - b.score).reverse().map(player =>
                <Col score={player.score}>
                    <div style={{ borderRadius: 20, backgroundColor: player.color + "aa" }}>

                        <div style={{ fontWeight: "bold", paddingTop: 15 }}>{player.display_name}</div>
                        <div style={{ fontSize: 48, lineHeight: 0.75, paddingBottom: 20 }}>{player.score}</div>

                    </div>

                </Col>
            )}
        </Row>
        <Row style={{ paddingLeft: 30, paddingBottom: 10, width: "100%", textAlign: "center" }}>
            <Col>
                <Accordion defaultActiveKey="0" style={{ color: "black" }}>
                    {props.room.board.levels.map(level =>
                        <Card bg={props.room.level_data[""+level].collected==props.room.level_data[""+level].count ? "success" : "dark"}>
                                <Accordion.Toggle as={Card.Header} style={{color:"white",fontWeight:"bold"}}  eventKey={level}>
                                    {level} {props.room.level_data[""+level].collected}/{props.room.level_data[""+level].count}
                                </Accordion.Toggle>
                            <Accordion.Collapse eventKey={level}>
                                <Card.Body style={{padding:0}}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", width: "100%", justifyContent: 'space-between' }}>
                                        {props.room.board.tasks.map(task => {
                                            if (task.level == level) return (
                                                <BlitzGrid rid={props.room.id} pid={props.pid} name={task.name} type={task.type} collected={task.collected} collector={task.collector} />)
                                        }
                                        )}
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )}

                </Accordion>

            </Col>
            <Col>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", width: "100%", justifyContent: 'space-between' }}>
                    {props.room.board.tasks.map(task =>
                        <BlitzGrid rid={props.room.id} pid={props.pid} name={task.name} type={task.type} collected={task.collected} collector={task.collector} />
                    )}
                </div>
            </Col>
        </Row>


    </div>


);

export default BlitzBoard;
