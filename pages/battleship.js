import React from 'react';
import axios from 'axios';
import BattleShipBoard from '../components/BattleShipBoard.js'
import { Button, InputGroup, FormControl, Container, Col, Row } from 'react-bootstrap'

export default class Index extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      board: { tasks: [] },
      room: null,
      player_id: "",
      rid_input: "",
      display_name_input: "",
    }
  }

  componentDidMount() {
    //Give the player an id
    this.setState({ player_id: [...Array(16)].map(i => (~~(Math.random() * 36)).toString(36)).join('') });

  }

  createRoomAndJoin() {

    let data = { pid: this.state.player_id, dn: this.state.display_name_input }

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }


    fetch('http://localhost:3001/mainThread/createroom', options)
      .then(res => res.json())
      .then(data => {
        this.setState({ room: data })
        //Get new room data
        const interval = setInterval(() => {
          this.refreshRoom();
        }, 1000);
      });
  }

  joinRoom(rid) {
    let data = { pid: this.state.player_id, rid: rid, dn: this.state.display_name_input }

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }


    fetch('http://localhost:3001/mainThread/joinroom', options)
      .then(res => res.json())
      .then(data => {
        this.setState({ room: data })
        //Get new room data
        const interval = setInterval(() => {
          this.refreshRoom();
        }, 1000);
      });
  }

  //Refreshes your room periodically
  refreshRoom() {
    if (this.state.room == null) return; //whered the room go?
    console.log("Getting new room data...")

    fetch('http://localhost:3001/mainThread/getroom/' + this.state.room.id)
      .then(res => res.json())
      .then(data => {
        this.setState({ room: data })
      });
  }


  render() {
    return (
      <div>

        {this.state.room == null &&
          <Container>
            <h1>
              Welcome to BfBB Battleship!
            </h1>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Display name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl onChange={e => this.setState({ display_name_input: e.target.value })} defaultValue={this.state.display_name_input}
                placeholder="ie: John"
                aria-label="ie: John"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <br></br>
            <Button variant="outline-primary" style={{ width: "100%" }} onClick={() => this.createRoomAndJoin()}>Create Room</Button>
            <br></br><br></br>
            <InputGroup className="mb-3">

              <FormControl onChange={e => this.setState({ rid_input: e.target.value })} defaultValue={this.state.rid_input}
                placeholder="Room ID"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-primary" onClick={() => this.joinRoom(this.state.rid_input)}>Join Room</Button>
              </InputGroup.Append>
            </InputGroup>
          </Container>}
        {this.state.room != null &&
          <div>
            <Row style={{ width: '100%' }}>
              <Col>
                <BattleShipBoard player={this.state.room.player1}></BattleShipBoard>
              </Col>
              <Col>
                {this.state.room.player2.id == null &&
                  <div>
                    <h1>Invite an opponent with the following code</h1>
                    <em>{this.state.room.id}</em>
                  </div>
                }
                {this.state.room.player2.id != null &&
                  <BattleShipBoard player={this.state.room.player2}></BattleShipBoard>
                }

              </Col>

            </Row>



          </div>}




      </div>

    )
  }
}