import Layout from '../components/PageLayout';
import { CardGroup, Card, Image, Button, Carousel, Container, Row, Col } from 'react-bootstrap';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import ScrollAnimation from 'react-animate-on-scroll';
import React from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import youtube from '../components/Youtube'
import VideoThumbnail from '../components/VideoThumbnail';


export default class Index extends React.Component {

  playlistSearch = '';
  topVideos = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&order=date&channelId=UC9Y0uUKJ5y78QbhHbntAyFQ&key=AIzaSyB_Viw1L-bRdhRKizRpIyEvud4RWU2zsWs';


  constructor(props) {
    super(props)
    this.state = {
      url: "https://player.twitch.tv/shift",
      playing: true,
      videos: []
    }

    this.changeVideo = this.changeVideo.bind(this);
  }

  componentDidMount() {
    this.handleSubmit();
  }

  changeVideo = (newUrl) => {
    this.setState({ url: newUrl, playing: true })
  }

  handleSubmit = async () => {
    const response = await axios.get(this.topVideos)
    this.setState({
      videos: response.data.items
    })
  }

  handleEnded = () => {
    this.load("https://twitch.tv/shift")
  }

  load = url => {
    this.setState({
      url
    })
  }

  render() {
    return (
      <Layout>
        <title>Shift: Live 8pm EST!</title>
        <div style={{ paddingRight: 15, paddingLeft: 15 }}>

          <div class="row" style={{ height: 600 }}>
            <div class="column" style={{ width: "15%" }}>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" offset="50" delay="500">
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="shiftposting"
                  theme="dark"
                  options={{ height: 600 }}
                />
              </ScrollAnimation>
            </div>
            <div class="column" style={{ width: "65%" }}>
              <ScrollAnimation animateIn="fadeInDown" animateOnce="true" offset="50" delay="1000">
                <div className='player-wrapper'>
                  <ReactPlayer
                    className='react-player'
                    url={this.state.url}
                    width='100%'
                    height='600px'
                    controls="true"
                    playing={this.state.playing}
                    onEnded={this.handleEnded}
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div class="column" style={{ width: "20%" }}>
              <ScrollAnimation animateIn="fadeInRight" animateOnce="true" offset="50" delay="500">
                <TwitchChat channel="shift" width="100%" height='600px' theme="dark" parent={['localhost']} style={{ border: 0 }} />
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div style={{ width: '100%', paddingLeft: 40, paddingRight: 40, paddingTop:20 }} >
          <h3 style={{ color: "white" }}>
            Catch the latest:
          </h3>
          <Row style={{ width: '100%' }}>
            {this.state.videos.map(vid =>
              <Col style={{ padding: 0, textAlign: 'center' }}>
                <VideoThumbnail
                  videoId={vid.id.videoId}
                  title={vid.snippet.title}
                  thumbnail={vid.snippet.thumbnails.medium.url}
                  changeVideo={this.changeVideo}
                >
                </VideoThumbnail>
              </Col>
            )}
          </Row>
        </div>



        <style>
          {`
        .column {
          float: left;
          height: 100%;
        }

      `}
        </style>

      </Layout>
    )
  }
}



/*
<TwitchPlayer
              channel="shift"
              id="twitch-player"
              theme="dark"
              onVideoPause={() => console.log(':(')}
              width='100%'
              height='700px'
            />

*/