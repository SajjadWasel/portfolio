import { Button, Card } from 'react-bootstrap';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init();

    return (
        <div data-aos="flip-up" data-aos-duration="600" className='aboutme text-center'>
            <h1 className='coded-heading'>&lt;ABOUT ME/&gt;</h1>
            <p>
                I am a passionate developer 💻 with a love for innovation and problem-solving 🧩. Competitive programming pushes me to find creative and efficient solutions 🚀.

                In addition to coding, I’m deeply interested in SEO 🌐, blending technology and digital marketing to enhance web visibility 📈 and user experience. Staying updated with trends keeps me motivated to grow and improve 🔄.

                Driven by a desire to make an impact 🌟, I combine technical expertise and strategic thinking to excel in every project I undertake.
            </p>
            <div className='mx-auto d-flex justify-content-center my-4 cards px-1'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Vice President: CCPC Royal Science Society</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='mx-2' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Executive Director: CCPC Programming & Robotics Society</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>10+ Awards On Various Activities</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Button className='mx-4 mb-1 btn-about'><a href="https://github.com/sajjadwasel" target="_blank">See My Work At Github →</a></Button>
                <Button className='mb-1'>Download Resume →</Button>
            </div>
        </div>
    );
};

export default About;