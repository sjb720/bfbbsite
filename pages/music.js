import Layout from '../components/PageLayout';
import PlainText from '../components/PlainText';

const Index = () => (
  <Layout>
    <h2>Music</h2>
    <p>All my game soundtracks are made original. Check them out here!</p>

    <iframe width="50%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/921945592&color=%239fb2e2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    <iframe width="50%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/929651869&color=%239fb2e2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
  </Layout>
);

export default Index;
