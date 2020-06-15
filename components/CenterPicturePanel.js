import { Container, Row, Col, Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const CenterPicturePanel = (props) => (
    <Container style={{paddingTop:90,paddingBottom:90}}>

        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center", height: "100%", color: "white" }}>
            <div>
                <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                    <Image src={props.image} fluid/>
                </ScrollAnimation>

                
                <ScrollAnimation animateIn="flipInX" animateOnce="true">
                    <h1>{props.header}</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="flipInX" animateOnce="true">
                    <p>{props.body}</p>
                </ScrollAnimation>

            </div>
        </div>
    </Container>


);
export default CenterPicturePanel;
