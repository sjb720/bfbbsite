import Header from './Header';
import Footer from './Footer';

const pageContainer = {
  color: '#fff',
  position: 'relative',
  minHeight: '100vh',
};

const pageStyleModern = {
  fontSize: '20px',
  fontFamily: 'Lato',
  padding:'20px 20%',
  paddingTop:'70px',
};

const contentContainer = {
  position: 'relative',
  paddingBottom: '50px',
};

const Layout = props => (
  <div style={pageContainer}>
    <Header />
    <div style={contentContainer}>
      <div style={pageStyleModern}>
        {props.children}
      </div>
    </div>
    <Footer />

    <style jsx>{`
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
          background: #000;
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #fff;
        }
        
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #aabfff;
        }

      `}</style>
      <style jsx global>{
        `html, body, div {
          margin: 0;
          padding: 0;
        }

        h2, h3{
          color:#aabfff;
        }

        p{
          text-align: left;
        }

        @media all and (max-width: 1500px) {
          .twitterfeed { display: none; }
        }

        `
      }</style>
  </div>
);

export default Layout;