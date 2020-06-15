import { Container, Row, Col, Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';


var SideBySide = (props) => (
    <Container style={{textAlign:"center", color:"white"}}>
        <Row>
            <Col>
                    <Image src={props.image1} fluid />
                    <h2>{props.header1}</h2>
                    <p>{props.body1}</p>
            </Col>
            <Col>

                    <Image src={props.image2} fluid />
                    <h2>{props.header2}</h2>
                    <p>{props.body2}</p>
            </Col>
        </Row>
    </Container>
);

export default SideBySide;

