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

          <Image id="breathing" style={{ paddingTop: 20, paddingBottom: 20 }} src="/bfbb-community-logo.png" fluid></Image>
        </Container>

        <Row>
          <Col style={{ padding: "2vw" }}>
            Poggers!
          </Col>
          <Col style={{ padding: "2vw" }}>
            <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
              <iframe
                id="tplayer"
                src="https://player.twitch.tv/?channel=shift&parent=bfbbsite.vercel.app&parent=localhost"
                style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
              </iframe>
            </div>

          </Col>

        </Row>





        <style>{`body{
        background-image: url("bg-ocean.jpg");
        background-repeat: no-repeat;
        background-attachment: fixed;
      }
      
      #breathing {
        -webkit-animation: breathing 5s ease-out infinite normal;
        animation: breathing 5s ease-out infinite normal;
        }
    
    
    @-webkit-keyframes breathing {
      0% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
    
      25% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    
      60% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
    
      100% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
      }
    }
    
    @keyframes breathing {
      0% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
      }
    
      25% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
    
      60% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
      }
    
      100% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
      }
    }
    
      
      `}</style>
      </PageLayout >


    )
  }
}