import React from 'react';
import ImageComp from '../imageComp'
import "../stylessheets.css";
import Me from "../pages/images/me.jpg";
// import project2 from "../pages/images/notetaker.png";
// import project5 from "../pages/images/TeamSetUp.png";
// import project6 from "../pages/images/coderefractor.png";
// import project7 from "";
import { Card, Row, Container, Col, Header } from "react-bootstrap";
// import Stack from 'react-bootstrap/Stack';
import Image from "react-bootstrap/Image";
import MrPassword from "../MrPassword";
import PokeFinder from "../PokeFinder";
import Hypos from "../Hypos";


export default function Home() {
  return (<div>
    {/* <div className="brand"></div>
      <h1>Joe Maneira</h1>
      <Container className="home-container">
        <ImageComp className="home-container" />
        <Card.ImgOverlay>
          <Row>
            <Col>
              <Image className="me" src={Me} width='55%' height="45%">

              </Image>
            </Col>
            <Col>
            
            </Col>
            <Col>
              <Card.Text className="about-me">
                Hi! I'm Joseph D. Maneira but I go by Joe. I'm a Full Stack Web Developer based in Hoboken, NJ who just graduated from the full-time Rutgers Coding Bootcamp at the end of January 2022. I was in construction management for most of my life and loved the creative process of building from the ground up (and navigating all of the hurdles and roadblocks that come in a project) and leading teams. I've been interested in tech my entire life, however, as I saw the unlimited creative potential to create online. I finally took the risk to change my career and dove into the Rutgers Coding Bootcamp with great professors from the industry and fellow students who became my colleagues as we designed applications together. After graduating, I'm working on a freelance project developing front-end structure for a private client using React. I'd love to connect with fellow web developers at jmaneira32@gmail.com. Please feel free to reach out and say hi!
              </Card.Text>
            </Col>
          </Row>
        </Card.ImgOverlay>
      </Container> */}
<div>
<div className="brand"><h1>Joe Maneira</h1></div>
      
      <Container className="portfolio-container">
        <Card.ImgOverlay>
          <Row>
            <Col>
            <Image className="me" src={Me}></Image>
            </Col>
            <Col>
             
            </Col>
            <Col>
            <Col>
              <Card.Text className="about-me">
                Hi! I'm Joseph D. Maneira but I go by Joe. I'm a Full Stack Web Developer based in Hoboken, NJ who just graduated from the full-time Rutgers Coding Bootcamp at the end of January 2022. I was in construction management for most of my life and loved the creative process of building from the ground up (and navigating all of the hurdles and roadblocks that come in a project) and leading teams. I've been interested in tech my entire life, however, as I saw the unlimited creative potential to create online. I finally took the risk to change my career and dove into the Rutgers Coding Bootcamp with great professors from the industry and fellow students who became my colleagues as we designed applications together. After graduating, I'm working on a freelance project developing front-end structure for a private client using React. I'd love to connect with fellow web developers at jmaneira32@gmail.com. Please feel free to reach out and say hi!
              </Card.Text>
            </Col>
            </Col>
          </Row>
        </Card.ImgOverlay>
        
      </Container>
      <ImageComp />
    
  

<div className="brand"><h1>Projects</h1></div>
<Container className="portfolio-container">
  <Card.ImgOverlay>
    <Row>
      <Col>
        <MrPassword />
      </Col>
      <Col>
       <PokeFinder />
      </Col>
      <Col>
      <Hypos />
      </Col>
    </Row>
  </Card.ImgOverlay>
  
</Container>
<ImageComp />
</div>
</div>


  );
}  