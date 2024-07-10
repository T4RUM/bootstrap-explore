import React from "react";
import Cards from "../components/Cards";
import MyCarousel from "../components/MyCarousel";
import { Button, Card, Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <>
      <main>
        <div className="jumbotron text-center mt-5">
          <h1 className="display-4">Bem-vindo ao MyTask</h1>
          <hr />
        </div>
        <Container className="my-4">
          <div>
            <MyCarousel />
          </div>
        </Container>

        <Container className="my-5">
          <div className="section-cards d-flex justify-content-center align-items-center gap-4">
            <Cards />
          </div>
        </Container>
      </main>
    </>
  );
}

export default Home;
