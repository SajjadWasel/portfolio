import { Button, Card, Col, Container, Row, } from "react-bootstrap";
import cardData from './card-data'; // Import the card data
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    AOS.init();

    return (
        <div className="projects mt-5">
            <h1 className="coded-heading">
                &lt;MY PROJECTS/&gt;
            </h1>
            <Container>
                <Row className="mt-4">
                    {cardData.map((card) => (
                        <Col key={card.id} md={4}>
                            <Card data-aos="flip-left" className='cards' style={{ width: '18rem' }}>
                                <Card.Img className="card-img" height="200px" width="300px" variant="top" src={card.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>
                                       {card.text}
                                    </Card.Text>
                                    <Button className="card-btn" variant="light" ><a className="card-btn" href={card.link}>View On Github</a></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Projects;