import React from 'react';
import './stylessheets.css'
import { Card, Button, Image } from "react-bootstrap";
import project4 from "../components/pages/images/hypo.png";


const Hypos = () => {
  return <div>

    <div className="card">
      <Image src={project4} width='100%' height="100%"></Image>
      <Button href="https://auction-pandemic-essentials.herokuapp.com/login" variant="success" size="md">
        <h5>Auction</h5>
      </Button>
    </div>

  </div>;
};

export default Hypos;