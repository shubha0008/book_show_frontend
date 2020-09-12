import React from "react";
import Carousel from "react-bootstrap/Carousel";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
        <Carousel.Item>
          <img className="d-inline-block h-50 custom-img" src='avengers.webp' alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50  custom-img" src='bahubali.webp' alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50  custom-img" src='ff8.webp' alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50  custom-img" src='ff7.webp' alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50  custom-img" src='mulan.webp' alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50  custom-img" src='mummy.webp' alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-inline-block h-50 custom-img" src='PVR.webp' alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousal;