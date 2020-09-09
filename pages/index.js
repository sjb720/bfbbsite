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

          <Image id="breathing" style={{ paddingTop: 20 }} src="/bfbb-community-logo.png" fluid></Image>

          <iframe
            src="https://player.twitch.tv/?shift&parent=https://bfbbsite.vercel.app/"
            height="100%"
            width="100%">
          </iframe>

        </Container>


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
      </PageLayout>


    )
  }
}