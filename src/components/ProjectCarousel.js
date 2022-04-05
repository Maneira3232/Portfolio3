import React from 'react';
import '../components/Style.css';
// import Github from "../components/pages/images/media.png";
// import { Row, Col, Image, Card, Button, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import PokeFinder from "../components/pages/images/PokeFinder.png";
import Hypo from "../components/pages/images/Hypo.png";
import MrPassword from "../components/pages/images/mr.password.png";
import { Image } from "react-bootstrap";



const ProjectCarousel = () => {
    return <div>
     <Carousel>
    <Carousel.Item>
      <Image width={1100} height={700} alt="900x500" src={PokeFinder}></Image>
      <div className="carousel-caption">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <Image width={1100} height={700} alt="900x500" src={Hypo}></Image>
      <div className="carousel-caption">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <Image width={1100} height={700} alt="900x500" src={MrPassword}></Image>
      <div className="carousel-caption">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </Carousel.Item>
  </Carousel>
    </div>

};

export default ProjectCarousel;