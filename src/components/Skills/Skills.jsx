import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import './Skills.css';
import { TiHtml5 } from "react-icons/ti";
import { FaBootstrap, FaCss3Alt, FaFigma, FaGithub, FaInfo, FaJsSquare, FaNodeJs, FaPython, FaReact, FaSketch, FaSoundcloud } from "react-icons/fa";
import { RiFirebaseFill, RiTailwindCssLine } from "react-icons/ri";
import { SiAppwrite, SiMongodb, SiSketchfab } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { TbCircleDashedLetterC, TbCircleLetterCFilled } from "react-icons/tb";
import AOS from 'aos';




const Skills = () => {
    AOS.init();

    return (
        <div   data-aos="flip-left"  data-aos-duration="1000">
            <h1 className='coded-heading'>&lt;MY SKILLS/&gt;</h1>
            <Container className="mt-5 bg-light rounded shadow p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Frontend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Backend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Collaboration</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Prototype</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Competitive Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">AI</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className="">
                                    <p className="skillset"><TiHtml5 className="skill-icon" /> HTML5</p>

                                    <p className="skillset"><FaCss3Alt className="skill-icon" /> CSS3</p>

                                    <p className="skillset"><FaJsSquare className="skill-icon" /> JAVASCRIPT</p>

                                    <p className="skillset"><FaReact className="skill-icon" /> ReactJS</p>

                                    <p className="skillset"><FaBootstrap className="skill-icon" /> Bootstrap</p>

                                    <p className="skillset"><RiTailwindCssLine className="skill-icon" /> Tailwind</p>


                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <p className="skillset"><RiFirebaseFill className="skill-icon" /> Firebase</p>

                                    <p className="skillset"><SiMongodb className="skill-icon" /> MongoDB</p>

                                    <p className="skillset"><SiAppwrite className="skill-icon" /> Appwrite</p>

                                    <p className="skillset"><FaNodeJs className="skill-icon" /> NodeJS</p>


                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p className="skillset"><FaGithub className="skill-icon" /> Github</p>

                                    <p className="skillset"><BiLogoNetlify className="skill-icon" /> Netlify</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <p className="skillset"><FaFigma className="skill-icon" /> Figma</p>

                                    <p className="skillset"><FaSketch className="skill-icon" /> Durable</p>

                                    <p className="skillset"><SiSketchfab className="skill-icon" /> Relume</p>


                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <p className="skillset"><FaPython className="skill-icon" /> Python</p>

                                    <p className="skillset"><TbCircleDashedLetterC className="skill-icon" /> C</p>

                                    <p className="skillset"><TbCircleLetterCFilled className="skill-icon" /> C++</p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <p className="skillset"><FaPython className="skill-icon" /> Python</p>

                                    <p className="skillset"><FaSoundcloud className="skill-icon" /> Sound Recognition (Pyttsx3)</p>

                                    <p className="skillset"><FaInfo className="skill-icon" /> API Manupulation</p>

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
};

export default Skills;