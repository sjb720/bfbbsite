import Link from 'next/link';
import { headerButton } from './buttons.module.css'

const footerStyle = {
  textAlign:'center',
  position: 'absolute',
  width: '100%',
  backgroundColor: 'rgba(11, 23, 82, 0.8)',
  height: '50px',
  bottom: 0,
  paddingTop:10
};

const imageStyle = {
  width:32,
  height:32,
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  marginRight: '10px',
  marginLeft: '10px'
}

const Footer = () => (
  <div style={footerStyle}>
    <a href="https://twitter.com/BfBBCommunity">
      <img style={imageStyle} src ='/twittericon.png'/>
    </a>

  </div>
  
);

export default Footer;