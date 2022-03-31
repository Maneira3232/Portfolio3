import React from 'react';
import '../components/Style.css';
import Github from "../components/pages/images/media.png";
// import Github from "../components/pages/images/media.png";
import { Row, Col, Image, Card, Button } from "react-bootstrap";
import LinkedIn from "../components/pages/images/Linkedin.png";

const GitLinkIn = () => {
    return <div>
        <Row>
            <Col>
                <Card className="git">
                    <Image className="git" src={Github}></Image>
                    <Button className="git" variant="success">Github</Button>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className="git" >
                    <Image className="git" src={LinkedIn}></Image>
                    <Button className="git" variant="success" href="https://www.linkedin.com/in/jmaneira/">LinkedIn</Button>
                </Card>
            </Col>

        </Row>


    </div>
};

export default GitLinkIn;