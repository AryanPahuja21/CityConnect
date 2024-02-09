import React from "react";
import HeroSection from "./components/heroSection";
import Navbar from "./components/Navbar.jsx";
import ServicePage from "./pages/service.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <ServicePage />
        {/* <HeroSection /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
