import React from 'react';
import './stylessheets.css'
import { Card, Button, Image } from "react-bootstrap";
import project1 from "../components/pages/images/mrpassword.png";


const MrPassword = () => {
  return <div>
    <Card>
      <div>
      <div className="card">
        <Image src={project1} width="100%" height="100%"></Image>
        <Button href="https://maneira3232.github.io/Mr.Pass-Word/" variant="success" size="md">
          <h5>Mr.Password</h5>
        </Button>
      </div>
      </div>
    </Card>
  </div>;
};

export default MrPassword;