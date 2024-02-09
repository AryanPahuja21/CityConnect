import React from "react";

const WhyCityConnect = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-8">Why Choose CityConnect?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-md shadow-md transition-transform transform hover:scale-105">
          <img src="https://img.freepik.com/free-vector/design-process-concept-illustration_114360-708.jpg?w=740&t=st=1707169639~exp=1707170239~hmac=0f0c83f45321bd19c513b156745fbc57e9f9f83e2f3eb645ab2abcad1cd285e1" alt="Astute" className="mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-4 text-gradient ">Comprehensive Information Hub</h2>
          <p>
          The website serves as a centralized platform providing extensive information about city services, initiatives, and resources, facilitating easy access for residents. </p>
        </div>

        
        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-md shadow-md transition-transform transform hover:scale-105">
          <img src="https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148553118.jpg?w=740&t=st=1707169753~exp=1707170353~hmac=833c9aaa6ef1d8b3722c8132c6557a6e34e7a204e0dfb998b21253f3f636468f" alt="Easy" className="mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-4 text-gradient">Interactive Engagement</h2>
          <p>
          Through interactive features such as reporting tools, forums, and feedback mechanisms, the website promotes citizen engagement, enabling residents to participate in decision-making and community initiatives.
          </p>
        </div>

        
        <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-md shadow-md transition-transform transform hover:scale-105">
          <img src="https://img.freepik.com/free-vector/brand-loyalty-concept-illustration_114360-15542.jpg?w=740&t=st=1707169823~exp=1707170423~hmac=2c22c2f28c1c1c40bf74542e6d5748bbe694c0220d70f3c9bc28cca8f7a3aa03" alt="Reachable" className="mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-4 text-gradient">Seamless Access to Services</h2>
          <p>
          City Connect offers seamless access to municipal services, allowing residents to easily report issues, find amenities, and engage with local government initiatives, thereby enhancing communication and responsiveness.
          </p>
        </div>

        
        <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-md shadow-md transition-transform transform hover:scale-105">
          <img src="https://img.freepik.com/free-vector/hand-drawn-cost-living-illustration_52683-142631.jpg?w=740&t=st=1707170164~exp=1707170764~hmac=57f1b5da6d2bd8e54d1371cd91795485ccf389c8769a64fe04b3d5554dcfc594" alt="Reasonably Priced" className="mb-4 rounded-md" />
          <h2 className="text-2xl font-bold mb-4 text-gradient">Real-Time Updates</h2>
          <p>
          The Smart City Connect website provides real-time updates on city events, news, and alerts, keeping residents informed about important developments and emergencies, thereby promoting transparency and ensuring timely communication with the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyCityConnect;