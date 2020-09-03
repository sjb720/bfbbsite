import React from 'react';
import axios from 'axios';
import PageLayout from '../components/PageLayout.js'
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
      <PageLayout>
        <title>The BfBB Resource Site!</title>
        <Container style={{ textAlign: "Center" }}>
          
          <Image style={{paddingTop:20}} src="/bfbb-community-logo.png" fluid></Image>
        </Container>


        <style>{`body{
        background-image: url("bg-ocean.jpg");
        background-repeat: no-repeat;
        background-attachment: fixed;
      }`}</style>
      </PageLayout>


    )
  }
}