import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "/robo.png";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Menu() {
  const usuario = useContext(UsuarioContext);
  const navigate = useNavigate();
  function handleLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }

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
                {usuario && (
                  <Link className="nav-link" to="/tarefas">
                    Tarefas
                  </Link>
                )}
                {!usuario && (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
                {!usuario && (
                  <Link className="nav-link" to="/cadastro">
                    Cadastro
                  </Link>
                )}
                <Link className="nav-link" to="/ajuda">
                  Ajuda
                </Link>
                {usuario && (
                  <span className="text-light nav-link">
                    {usuario.displayName}
                  </span>
                )}
                {usuario && (
                  <Button variant="outline-light" onClick={handleLogout}>
                    Sair
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Menu;
