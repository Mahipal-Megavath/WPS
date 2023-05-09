import React from "react";
import './Main.css'
import bar from './bar.jpg';
import ee from './ee.png';
import plumber from './Plumber.jpg';
import painting from './painting.jpg';
import Carousel from 'react-bootstrap/Carousel';


export default function Main() {
  return (
    <>
    <Carousel variant="dark" className="link1">
      <Carousel.Item interval={1000}>
        <div class="container d-flex align-items-center justify-content-center bg-white" style={{marginTop:"0px"}}>
        <img
          className="d-block"
          src={ee}
          alt="First slide"
        />

        </div>
      </Carousel.Item>



      <Carousel.Item interval={1000}>
      <div class="container d-flex align-items-center justify-content-center bg-white">

        <img
          className="d-block "
          src={painting}
          alt="Second slide"
        />
      </div>
      </Carousel.Item>


      <Carousel.Item interval={1000}>
      <div class="container d-flex align-items-center justify-content-center bg-white">

        <img
          className="d-block"
          src={plumber}
          alt="Third slide"
        />
      </div>

      </Carousel.Item>


      <Carousel.Item interval={1000}>
      <div class="container d-flex align-items-center justify-content-center bg-white">

        <img
          className="d-block "
          src={bar}
          alt="Second slide"
        />
      </div>
      </Carousel.Item>


    </Carousel>
    <div>

    </div>
    </>
  );
}

       
    

