import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => (
  <div>
    <Header></Header>
    <div style={{fontFamily:"Jockey One"}}>
       {props.children}
    </div>
    
    <style>
      {`

  body {
    background-color: #111111;
    background-image: url('shift-bg.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

`}
    </style>
  </div>


);

export default Layout;