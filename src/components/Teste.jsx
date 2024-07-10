import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "/robo.png";

function Teste() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Link className="nav-link" to="/politicadeprivacidade">
                  teste
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Teste;
