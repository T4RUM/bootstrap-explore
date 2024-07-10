import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "/robo.png";

function Menu() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Link to="/">
              <img src={Logo} width="50" />
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/cadastro">
                  Cadastro
                </Link>
                <Link className="nav-link" to="/ajuda">
                  Ajuda
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Menu;
