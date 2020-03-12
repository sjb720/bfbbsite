import Layout from '../components/PageLayout';
import PlainText from '../components/PlainText';

const Index = () => (
  <Layout>
    <h2>About Us</h2>
    
    <img src="/me.jpg" height= "260px"align="left" style={{paddingRight: "10px"}}/> 
    <p>Well, for now it's just me, Stephen. Here's a tasteful picture of me on Thanksgiving.</p> 
    <p>
      I've been playing games my whole life and find inspiriation in a lot of older game values. I started makin games when 
      I was 12. That's when I knew I wanted to be a computer scientist. I've come a long way since then and soon I'll have a degree in Computer Science and 
      Mathematics while juggling this whole game development thing. </p>
    <p>
      One day I hope to make this passion my main source of income, but for now it's my favorite hobby.
    </p>
    
    <PlainText>pureheartstdio@gmail.com</PlainText>
  </Layout>
);

export default Index;
