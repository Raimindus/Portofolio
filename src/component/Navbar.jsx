import { Container, Nav, Navbar } from "react-bootstrap";
import gaya from "../css/Navbar.module.css";

function navbar() {
  return (
    <>
      <Navbar className={gaya.background}>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home" className={gaya.nav}>
              Home
            </Nav.Link>
            <Nav.Link href="#aboutme" className={gaya.nav}>
              About Me
            </Nav.Link>
            <Nav.Link href="#skill" className={gaya.nav}>
              Services & Skills
            </Nav.Link>
            <Nav.Link href="#contact" className={gaya.nav}>
              Contact Me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
