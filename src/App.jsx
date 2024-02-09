import React from "react";
import HeroSection from './Components/heroSection.jsx';
import Navbar from './Components/Navbar.jsx';
import ServicePage from "./pages/service.jsx";
import Footer from './Components/Footer.jsx';
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <ServicePage />
       
        <Footer />
      </div>
    </>
  );
}

export default App;
