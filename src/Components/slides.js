import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slides.css"

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={1500} pauseOnHover={false}>
        <Carousel.Item>
          <img className="d-inline-block h-50 custom-img tales" src='avengers.webp' alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50  custom-img tales" src='bahubali.webp' alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50  custom-img tales" src='ff8.webp' alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50  custom-img tales" src= "pic3.webp" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50  custom-img tales" src='mulan.webp' alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50  custom-img tales" src='mummy.webp' alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50 custom-img tales" src='PVR.webp' alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousal;