import React from 'react';
import axios from 'axios';
import BattleShipBoard from '../components/BattleShipBoard.js'
import { Button, InputGroup, FormControl, Container, Col, Row, Image } from 'react-bootstrap'

const button_style = {
  width: "100%",
  marginTop: 20
}

export default class Index extends React.Component {



  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }


  render() {
    return (
      <Container style={{textAlign:"Center"}}>
        <Image src="/logo.png"></Image>
        <Button variant="outline-primary" style={button_style} href="/blitz" >Blitz</Button>
        <Button variant="outline-primary" style={button_style} href="/bingo" disabled>Bingo</Button>
        <Button variant="outline-primary" style={button_style} href="/battleship" disabled>Battleship</Button>
      </Container>

    )
  }
}