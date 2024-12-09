import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Button } from 'react-bootstrap';

function CustomNavbar() {
  
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-container">
      <Container>
        <Navbar.Brand href="#home"><b className='nav-icon'>&lt;SAJJAD WASEL/&gt;</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto">
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link className='nav-button' href="#contact">
              <Button variant="primary">Contact</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;