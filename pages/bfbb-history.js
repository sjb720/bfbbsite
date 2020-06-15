import Layout from '../components/PageLayout';
import { CardGroup, Card, Image, Button, Carousel, Container, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import React from 'react'
import ReactPlayer from 'react-player';
import axios from 'axios';
import VideoThumbnail from '../components/VideoThumbnail';

export default class Index extends React.Component {

  topVideos = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLDzuZShnnVbZ78eM3wnnXq1C3mnU2PMZf&key=AIzaSyB_Viw1L-bRdhRKizRpIyEvud4RWU2zsWs';


  constructor(props) {
    super(props)
    this.state = {
      url: "https://www.youtube.com/watch?v=djkC8vLJ6Vw",
      playing: true,
      videos: []
    }

    this.changeVideo = this.changeVideo.bind(this);
  }

  componentDidMount() {
    this.handleSubmit();
  }


  handleEnded = () => {
    var nextVideo="https://www.youtube.com/watch?v="+this.state.videos[0].snippet.resourceId.videoId;
    var i;
    for(i = 0; i < this.state.videos.length-1; i++){
      if(this.state.url == "https://www.youtube.com/watch?v="+this.state.videos[i].snippet.resourceId.videoId)
        nextVideo = "https://www.youtube.com/watch?v="+this.state.videos[i+1].snippet.resourceId.videoId;
    }

    this.setState({ url: nextVideo, playing: true })
  }

  handleSubmit = async () => {
    const response = await axios.get(this.topVideos)
    this.setState({
      videos: response.data.items
    })
  }

  changeVideo = (newUrl) => {
    this.setState({ url: newUrl, playing: true })
  }

  render() {
    return (
      <Layout>
        <title>The History of BfBB</title>
        <h1 style={{ color: "white", textAlign: "center"}}>How Speedrunning Revived BfBB</h1>

        <ScrollAnimation animateIn="bounceInLeft" animateOnce="true" offset="50">
          <div style={{ width: '100%', paddingLeft: '21%', paddingRight: '21%', height: '33vw' }}>
          <ReactPlayer
                    className='react-player'
                    url={this.state.url}
                    width='100%'
                    height='100%'
                    controls="true"
                    playing={this.state.playing}
                    onEnded={this.handleEnded}
                  />          </div>
        </ScrollAnimation>

        <div style={{ width: '100%', paddingLeft: 40, paddingRight: 40, paddingTop:20 }} >
          <Row style={{ width: '100%' }}>
            {this.state.videos.map(vid =>
              <Col style={{ padding: 0, textAlign: 'center' }}>
                <VideoThumbnail
                  videoId={vid.snippet.resourceId.videoId}
                  title={vid.snippet.title}
                  thumbnail={vid.snippet.thumbnails.medium.url}
                  changeVideo={this.changeVideo}
                >
                </VideoThumbnail>
              </Col>
            )}
          </Row>
        </div>

      </Layout>
    )
  }
}