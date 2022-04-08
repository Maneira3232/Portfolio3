import React from 'react';
import "../Style.css";
import Me from "../pages/images/man.png";
import { Card, Row, Container, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import GitLinkIn from "../GitLinkIn.js";
import  ProjectCarousel  from '../ProjectCarousel';
// import Header from "react-bootstrap/Header"

export default function Home() {
  return (<div className="home-container">
    <div>
      <h1 className="brand">Joe Maniera</h1>

      <Container className="homecontainer">
        <Row>
          <Col>
            
              <Image  border="20px"src={Me} className="me" border-radius= "400px" ></Image>
           
           
            <Card className="link-tabs">
              
              <GitLinkIn />
              
             
            </Card>
          </Col>
          <Col>
          </Col>
          <Col>
            <Card.Text className="about-me">
              Hi! I'm Joseph D. Maneira but I go by Joe. I'm a Full Stack Web Developer based in Hoboken, NJ who just graduated from the full-time Rutgers Coding Bootcamp at the end of January 2022. I was in construction management for most of my life and loved the creative process of building from the ground up (and navigating all of the hurdles and roadblocks that come in a project) and leading teams. I've been interested in tech my entire life, however, as I saw the unlimited creative potential to create online. I finally took the risk to change my career and dove into the Rutgers Coding Bootcamp with great professors from the industry and fellow students who became my colleagues as we designed applications together. After graduating, I'm working on a freelance project developing front-end structure for a private client using React. I'd love to connect with fellow web developers at jmaneira32@gmail.com. Please feel free to reach out and say hi!
            </Card.Text>
          </Col>
        </Row>
      </Container>
    </div>
    <div>
      <h1 className="brand">Projects</h1>

      <Container className="Projects">
            <ProjectCarousel/>
       </Container>
    </div>
    <div>
      <h1 className="brand">Next Section</h1>
      <Container>
        <Row>
          <Col>
            <Card></Card>
          </Col>
          <Col>
            <Card></Card>
          </Col>
          <Col>
            <Card></Card>
          </Col>
        </Row>
      </Container>
    </div>
  
  
  
  
  </div>

  );
}
