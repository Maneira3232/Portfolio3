import React from 'react';
import backimage from "../components/pages/images/backgroundprofile.jpg";
import './stylessheets.css'
import { Container, Image, Card } from "react-bootstrap";

const imageComp = () => {
  return <div>

      <Image className="backgroundpic" src={backimage}></Image>
     

  </div>;
};

export default imageComp;