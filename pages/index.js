import Layout from '../components/PageLayout';
import PlainText from '../components/PlainText';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


const contentBacker = {
  backgroundColor:'rgba(11, 23, 82, 0.8)',
  padding: 20,
  marginTop: 20,
  borderRadius:5,
  textAlign:"left"
}

const Index = () => (
  <Layout>
    <div>
        <img src ="BfBB_Community_Logo.png" style={{width:300}}></img>
        

      <div style={contentBacker}>
        <div>
          <iframe style={{height: "34vw",width:"100%"}}src="https://player.twitch.tv/?channel=bfbbcommunity"  frameborder="0" allowfullscreen="true" scrolling="no"></iframe>
              {/* This is our twitter */}
              <div class="twitterfeed" style={{top:70,right:20,position:"fixed"}}>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="BfBBCommunity"
                  options={{height: "34vw", width: 325}}
                />
          </div>
         </div>
            <h1>Welcome</h1>
            <hr></hr>
            <p>
            Welcome to the SpongeBob SquarePants: Battle for Bikini Bottom community homepage and resource. 
            This site has a primary focus on speedrunning, but we also provide other resources related to the
             game. If you are interested in speedrunning, take a look at our <span style={{color:"#ff00ff"}}>Getting Started</span> guide. You may
              also check out the community stream above.
            </p>

        </div>



        
    </div>
    
    
  </Layout>
);

export default Index;
