import React from "react";
import MyAccordion from "./MyAccordion";
import { Box } from "@mui/material";
import WhyCityConnect from './WhyCityConnect.jsx';
const HeroSection = () => {
  return (
    <>
      <div className="relative max-w-[85rem] mx-auto px-4 sm:px-4 mt-10 max-md:mt-5 lg:px-10 bg-gray-300 rounded-2xl p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-white mix-blend-multiply opacity-75 z-0"></div>
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight pt-10">
                Welcome to
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-white">
                  {" "}
                  CitySync
                </span>
                : Your Gateway to Smarter City Living
              </h1>
              <p className="mt-10 text-lg text-gray-300 dark:text-gray-400">
                At CitySync, we're dedicated to empowering residents and
                building a more connected community. Through our innovative
                CitySync app, we're transforming urban living by facilitating
                seamless access to city services, enhancing safety and security,
                promoting green spaces, and fostering sustainability. Join us in
                shaping the future of our city, one connection at a time.
              </p>

              {/* Buttons */}
              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  href="/trending"
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-blue-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Get started
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-10 -mx-4 sm:mt-0 relative">
              <img
                className="mx-auto shadow-2xl rounded-2xl object-cover"
                style={{
                  width: "calc(100% + 40px)",
                  height: "calc(100% + 20px)",
                  margin: "-20px",
                }}
                src="https://cdn.dribbble.com/users/1523313/screenshots/12678917/media/6aaea022816612ac8ca6c077dab94e3a.gif"
                alt="Product illustration"
              />
            </div>
          </div>
        </div>
      </div>
   
      <Box
        sx={{ marginTop: "2rem", paddingLeft: "10px", paddingRight: "10px" }}
      >
        
        <WhyCityConnect/>
    
        <MyAccordion />
      </Box>
    </>
  );
};

export default HeroSection;
