const TextStyle = {
  backgroundColor:'#000',
  padding:'10px',
  fontSize:'14px',
  boxShadow: '0px 5px 5px black',
  borderRadius: '10px',
  width:'auto',
  display: 'inline-block',
};

const PlainText = props =>  (
  <pre style={TextStyle}>
    <code>
      {props.children}
    </code>
  </pre>
);

export default PlainText;