import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/heroSection";
import ServicePage from "./pages/service.jsx";
import Footer from "./Components/Footer";
import Calendar from "./Components/Calendar";
import Events from "./Components/Events";
import Crime from "./Components/Crime";
import Report from "./Components/Report";
import SignUp from "./Components/SignUp.jsx";
import SignIn from "./Components/SignIn.jsx";
import AmenitiesGuide from "./Components/AmenitiesGuide.jsx";
import WhyCityConnect from "./Components/WhyCityConnect.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<HeroSection />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/crime" element={<Crime />}></Route>
            <Route path="/services" element={<ServicePage />}></Route>
            <Route path="/crime/report" element={<Report />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/amenities" element={<AmenitiesGuide />} ></Route>
          </Routes>
        </Router>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
