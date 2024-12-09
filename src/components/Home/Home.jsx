import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
    AOS.init();
    return (
        <div className='home '>
            <Container className="top-banner py-5">
                <Row className="align-items-center">
                    <Col data-aos="flip-left" md={6} className="text-sm-left">
                        <h1>HI! WELCOME TO THE <span>WORLD OF CODING</span></h1>
                        <p>
                            Discover the best solutions for your needs with our innovative and
                            user-friendly platform. Join us to experience the future!
                        </p>
                        <button className="about-me-btn mx-2 btn btn-primary"><a href="#about">About Me</a></button>
                    </Col>

                    <Col md={6} className="text-center d-flex">
                        <img
                            src="https://i.ibb.co.com/tZF4s05/sajjad-wasel-1-1.png"
                            alt="Banner"
                            className="img-fluid rounded shadow"
                            data-aos="flip-right"
                        />

                        <div className="social-media">
                            <a href="https://facebook.com/waselbook" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className='social-icon' />
                            </a>
                            <a href="https://github.com/sajjadwasel" target="_blank" rel="noopener noreferrer">
                                <FaGithub className='social-icon' />
                            </a>
                            <a href="https://www.linkedin.com/in/sajjadwasel/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className='social-icon' />
                            </a>
                            <a href="https://www.instagram.com/sajjad_wasel/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className='social-icon' />
                            </a>
                            <a href="https://x.com/sajjad_wasel" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className='social-icon' />
                            </a>
                        </div>
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default Home;