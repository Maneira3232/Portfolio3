import React, { useState } from 'react';
import NavTabs from '../NavBarComp/NavTabs';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Footer from "../Footer/Footer.js";
// import backgroundComp from "../backgroundComp/backgroundComp.js";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      
      <Footer/>
    </div>
    
  );
}
