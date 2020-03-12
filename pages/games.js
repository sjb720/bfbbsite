import Layout from '../components/PageLayout';
import GameButton from '../components/GameButton';

const gameGrid = {
  display:"grid",
  gridTemplateColumns: '100%',
  gridTemplateRows: 'auto auto auto',
  gridGap: '5px 5px',
};

const Index = () => (
  <Layout>
    <div style={gameGrid}>
      <GameButton banner="/lswyg_banner.png" link="/lswyg"/>
      <GameButton banner="/music_wave_banner.png" link="/musicwave"/>
    </div>
    
  </Layout>
);

export default Index;
