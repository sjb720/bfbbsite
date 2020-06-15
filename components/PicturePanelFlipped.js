import { Container, Row, Col, Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';


var PicturePanel = (props) => (
    <Container>
        <Row>
            <Col sm={6}>
                <div style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", height: "100%", color: "white" }}>
                    <div>
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
                            <h1>{props.header}</h1>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInLeftBig" animateOnce="true">
                            <p>{props.body}</p>
                        </ScrollAnimation>

                    </div>
                </div>

            </Col>
            <Col sm={6}>
                <ScrollAnimation animateIn="zoomIn" animateOnce="true" >
                    <Image src={props.image} fluid />
                </ScrollAnimation>
            </Col>
        </Row>
    </Container>
);

export default PicturePanel;

