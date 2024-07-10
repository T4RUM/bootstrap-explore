import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Myfooter() {
  return (
    <>
      <footer className="bg-dark text-white py-2 mt-auto fixed-bottom">
        <Container>
          <Row className="align-items-center">
            <Col>
              <p>© 2024 MyTask. Todos os direitos reservados.</p>
            </Col>
            <Col className="text-right">
              <div className="d-flex">
                <Link className="nav-link mx-2" to="">
                  FAQ
                </Link>
                <Link className="nav-link mx-2" to="">
                  Termos de Uso
                </Link>
                <Link className="nav-link mx-2" to="/politicadeprivacidade">
                  Políticas de Privacidade
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Myfooter;
