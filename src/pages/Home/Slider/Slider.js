import React from 'react';
import { Carousel } from 'react-bootstrap';


import slider1 from "../../../images/slider/slider1.jpg"
import slider2 from "../../../images/slider/slider2.jpg"
import slider3 from "../../../images/slider/slide-3.jpg"



const Slider = () => {
    return (
        <Carousel>
        <Carousel.Item >
        <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Second slide"
          />
            <Carousel.Caption>
            <h1>THE WATCH EVERYONE DESIRE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
             
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
                    src={ slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1>AN EXTRAORDINARY CLASSIC</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
                    src={ slider3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>WATCH FOR HIGH-TECH PROPLE</h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Slider;