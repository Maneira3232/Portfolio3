import React from 'react';
import './stylessheets.css'
import { Card, Button, Image } from "react-bootstrap";
import project3 from "../components/pages/images/pokeFinder.png";


const PokeFinder = () => {
  return <div>
<div>
  
    <div className="card">
      <Image src={project3} width='100%' height="100%"></Image>
      <Button href="https://bchen41.github.io/PokeFinder/" variant="success" size="md">
        <h5>PokeFinder</h5>
      </Button>
    </div>
    
</div>

  </div>;
};

export default PokeFinder;