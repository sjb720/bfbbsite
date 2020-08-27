import React from 'react';
import axios from 'axios';
import BlitzBoard from '../components/BlitzBoard.js'
import { Button, InputGroup, FormControl, Container, Col, Row, Alert, Accordion, Card } from 'react-bootstrap'

const BACKEND_IP = "https://bfbbhub.herokuapp.com";
//const BACKEND_IP = "http://172.16.127.245:3001";

const POLLING_RATE_MILLI_SECONDS = 1000;

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


    fetch(BACKEND_IP + '/blitz/createroom', options)
      .then(res => res.json())
      .then(data => {
        this.setState({ room: data })
        //Get new room data
        const interval = setInterval(() => {
          this.refreshRoom();
        }, POLLING_RATE_MILLI_SECONDS);
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


    fetch(BACKEND_IP + '/blitz/joinroom', options)
      .then(res => res.json())
      .then(data => {
        this.setState({ room: data })
        //Get new room data
        const interval = setInterval(() => {
          this.refreshRoom();
        }, POLLING_RATE_MILLI_SECONDS);
      });
  }

  //Refreshes your room periodically
  refreshRoom() {
    if (this.state.room == null) return; //whered the room go?
    console.log("Getting new room data...")

    fetch(BACKEND_IP + '/blitz/getroom/' + this.state.room.id)
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
            <title>BfBB Blitz</title>
            <h1 style={{textAlign:"center", paddingTop:100,paddingBottom:100}}>
              Welcome to BfBB Blitz!
            </h1>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Display name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl onChange={e => this.setState({ display_name_input: e.target.value })} defaultValue={this.state.display_name_input}
                placeholder="1 - 10 characters"
                aria-label="1 - 10 characters"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <br></br>
            <Button disabled={this.state.display_name_input.length < 1} variant="outline-primary" style={{ width: "100%", marginBottom: 5 }} onClick={() => this.createRoomAndJoin()}>Create Room</Button>
            <br></br>
            <InputGroup className="mb-3">

              <FormControl onChange={e => this.setState({ rid_input: e.target.value })} defaultValue={this.state.rid_input}
                placeholder="Room ID"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button disabled={this.state.display_name_input.length < 1} variant="outline-primary" onClick={() => this.joinRoom(this.state.rid_input)}>Join Room</Button>
              </InputGroup.Append>
            </InputGroup>

            <Accordion defaultActiveKey="0" style={{color:"black"}}>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    How to play
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p>
                      Blitz is an intense speed game where up to 8 players compete to be the first to collect as many objects as possible.
                    </p>
                    <h2>
                      Rules
                    </h2>
                    <p>
                      The game begins when all players are ready. Everyone starts from the main menu one input away from creating a new game. Once
                      ready, every player starts at the same time. When a player collects something, they simply click on the image to collect it.
                      The picture can be clicked on anytime after the frame the player touched the objects. This means players that collect the object
                      first don't neccesarily earn the points.
                    </p>
                    <p>
                      Each object is worth a different amount of points.:
                    </p>
                    <ul>
                      <li>Spatulas: 3 points</li>
                      <li>Socks: 2 points</li>
                    </ul>
                    <p>
                      The winner is determined after every object has been collected on the board. The winner is the player with the highest score. Players
                      reserve the right to forfeit if they have no chance of winning.
                    </p>
                    <p>
                      Certain in game cheats are allowed, see the list for more info.
                    </p>
                    <h2>
                      Strategy
                    </h2>
                    <p>
                      Maybe SpongeBob's closet isn't worth your time if you don't think you can be the first to get in. Know your limits and weigh if it's worth
                      taking your opponents head on.
                    </p>
                    <p>
                      Know your opponents and what spatulas they might go for. If your player is simply following the 100 percent route, try skipping ahead
                      and beating them to the parts of the route they will eventually arrive at.
                    </p>
                    <p>
                      Learn the board. The Socks and Spatulas are in level order.
                    </p>
                    <p>
                      Competing head on for collectables is high risk high reward. If you get to it before your opponent, you have wasted their time. In
                      a game with 8 players, it might be good to snipe the leaders collectables to prevent them from gaining an even bigger lead.
                    </p>
                    <p>
                      Mix it up. People will learn your favorite collectables and try to sabotage you through such.
                    </p>
                    
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Allowed in game cheats
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    The following IGC are allowed to be entered as many times or at any point during the game:
                    <ul>
                      <li>10 Gold Spatulas</li>
                      <li>1,000 Shiny Objects</li>
                      <li>Bubble Bowl Power</li>
                      <li>Cruise Bubble Power</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

          </Container>}
        {this.state.room != null &&
          <div>
            <title>BfBB Blitz: Room {this.state.room.id}</title>
            <Alert variant="primary">
              {this.state.room.players.length}/8 players. Invite more with: <b>{this.state.room.id}</b>
            </Alert>
            <BlitzBoard pid={this.state.player_id} room={this.state.room}></BlitzBoard>

          </div>}




      </div>

    )
  }
}