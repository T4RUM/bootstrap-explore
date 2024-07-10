import React from "react";
import Not from "../../public/not.jpg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main>
        <Link className="d-flex justify-content-center" to="/">
          <img
            src={Not}
            alt="Imagem de erro"
            className="img-fluid"
            style={{ maxWidth: "1000px" }}
          />
        </Link>
      </main>
    </>
  );
}

export default NotFound;
