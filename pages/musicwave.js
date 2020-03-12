import Layout from '../components/PageLayout';
import PlainText from '../components/PlainText';
import DownloadButton from '../components/DownloadButton';

const Index = () => (
  <Layout>
    <div>
      <div style={{textAlign:'center',}}>
       <iframe style={{height: "30vw",width:"90%"}} src="https://www.youtube.com/embed/72msr-lryrk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br></br>
      <div style={{textAlign:'center',}}>
        <i>Lose yourself in a sea of vibrant lights as you tap along to your favorite electronic music.</i>
      </div>
      
      <h2>About</h2>
      <p>MusicWave is one of my first projects. It's a rhythm game centralized around EDM with a high skill ceiling and beautiful visuals.</p>
      <p>
        The project was greenlit over four years ago, just a few months before Steam removed the greenlight feature. I decided to take a step back from 
        the project because my programming skills weren't quite ready for the scope I imagined. However, I am much more experienced now and ready to tackle
        the original plan for MusicWave.
      </p>
      <h2>Gameplay</h2>
      <p>
        I like to call MusicWave the <span style={{color: '#aabfff'}}>Guitar Hero of EDM</span>. The vision first came to me while tapping my favorite Monstercat
        songs on my lap in a long car ride. When I got home, I began creating the project.
      </p>
      <p>
        The mechanics combine Guitar Hero's score multiplier and starpower meter with accuracy measurements from other rhthym games. The result rewards players
        for not only maintaining streak, but hitting notes down to the hundreth of a second. The goal is to create a large skill ceiling so players can always
        improve.
      </p>
      <h2>Custom Tracks</h2>
      <p>
        I want MusicWave to have a strong community which is why the game fully supports <span style={{color: '#aabfff'}}>custom tracks</span>. Players can create, share, and play
        other's songs. Is your favorite EDM song not in the game? Just create a song chart for it and upload it for the world to play!
      </p>
      <p>
        Song charts are generated from MIDI files through the song generating program. To learn more about creating custom songs, watch this video:
      </p>
      <p>
        The song generator creates a playable song file from a properly formatted MIDI.<br></br>
        <span style={{color:'#E85346'}}> Note: The program requires Java to be installed on your machine.</span>
      </p>
      <p>
         Download the song generator here:
      </p>
      <DownloadButton link="/files/SongCreator-Windows.zip">Windows</DownloadButton>
      <DownloadButton link="/files/SongCreator-Linux.zip">Linux</DownloadButton>
      <h2>For Music Creators</h2>
      <p>
        Want your song to be a part of the game?
      </p>
      <p>
        Contact me at <span><PlainText>pureheartstdio@gmail.com</PlainText></span> with a demo and if it fits into the game's
        main tracklist I'll include it with your permission!
      </p>
      <h2>Join the Conversation</h2>
      <p>
        The best place to see updates is through following my <span><a style={{color: '#aabfff'}} href="https://twitter.com/pureheartstu">twitter</a></span>.
      </p>
      <p>
        I highly recommend you join the game's <span><a style={{color: '#aabfff'}} href="https://www.reddit.com/r/musicwave/">subreddit</a></span>.
        Feel free to post questions or recommendations here. It's a good step to building a stong community
      </p>
      
    </div>
  </Layout>
);

export default Index;


