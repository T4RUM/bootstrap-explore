import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Magic from "../../public/magic.png";
import TaskMagic from "../../public/taskMagic.png";
import TaskRobot from "../../public/taskRobot.png";

function MyCarousel() {
  return (
    <>
      <Carousel style={{ maxWidth: "600px", margin: "auto" }}>
        <Carousel.Item>
          <img className="d-block w-100" src={Magic} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={TaskMagic} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={TaskRobot} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default MyCarousel;
