import React from 'react';

const AmenitiesGuide = () => {
  const amenities = [
    { name: 'Hotel', description: 'Find nearby hotels for your stay.', imageUrl: 'https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=996&t=st=1707482726~exp=1707483326~hmac=1f88d07eca4a2797e54e62888ef93dc095f6787666c449332279822ef6c19116' },
    { name: 'Restaurant', description: 'Discover local dining options.', imageUrl: 'https://img.freepik.com/free-vector/restaurant-facade-background_23-2147673396.jpg?w=740&t=st=1707482772~exp=1707483372~hmac=9f11f7de428840b7d69b8c414e631f76c188a60fc42b3407032e8189aeb61a57' },
    { name: 'Cafe', description: 'Enjoy a cup of coffee or tea.', imageUrl: 'https://img.freepik.com/free-vector/isometric-business-lunch-people-colored-composition_1284-24397.jpg?w=740&t=st=1707481240~exp=1707481840~hmac=54ea8ce0d82f1118ff74524d999ad9ae65130bb887a003aa88e1255af02f602c' },
    { name: 'Police Station', description: 'Guardians of community safety and security.', imageUrl: 'https://img.freepik.com/free-vector/cartoon-police-station-building-with-patrol-cars_107791-15791.jpg?w=1060&t=st=1707481735~exp=1707482335~hmac=7cf861cc6e1ae33a1e57b81a54d6439709a0d1487817eb0860ea92d0c24cfeed' },
    { name: 'Petrol Pump', description: 'Locate petrol pumps for your vehicle.', imageUrl: 'https://img.freepik.com/free-vector/fuel-station-concept-illustration_114360-6639.jpg?w=900&t=st=1707481314~exp=1707481914~hmac=0db20fe89cc4d686d5f9df0153025e6ff814867609d1f8f6af9484f5ac207ee2' },
    { name: 'Hospital', description: 'Find nearby hospitals and medical centers.', imageUrl: 'https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=996&t=st=1707481357~exp=1707481957~hmac=c2edc7edc6bb3c6049a1e073c6574084b9e590d306ede0e13b73093f0cb4af44' },
    { name: 'School', description: 'Explore educational institutions in the area.', imageUrl: 'https://img.freepik.com/free-vector/vector-cartoon-illustration-school-building-green-lawn-road-trees-educalion-l_134830-1588.jpg?w=1060&t=st=1707481506~exp=1707482106~hmac=efdf09b3320df110e10af81fda9269987b51425589a6dc54bbfd7a4da7a052bd' },
    { name: 'Garage', description: 'Find vehicle repair and maintenance services.', imageUrl: 'https://img.freepik.com/free-vector/auto-mechanic-concept-illustration_114360-17860.jpg?w=900&t=st=1707481473~exp=1707482073~hmac=8adbe65f5be27edc621b0fccabafb755c70991cd94366acc96edefaee690e840' },
    { name: 'Parking', description: 'Find parking spots for your vehicle.', imageUrl: 'https://img.freepik.com/free-vector/driving-school-concept-illustration_114360-11310.jpg?w=900&t=st=1707481536~exp=1707482136~hmac=064dded88d25052efa84980410932493f425bed4acd5a1c522ab5c729cfb73b9' },
    // { name: 'Picnic Spot', description: 'Discover scenic picnic spots.', imageUrl: 'https://img.freepik.com/free-vector/outdoor-picnic-vector-illustration_1284-14543.jpg?w=740&t=st=1707481585~exp=1707482185~hmac=779c1aeebdec0b3531fdc137a945799c559e03824d92272c693bfff78e2e9e3b' },
  ];

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {amenities.map((amenity, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <img src={amenity.imageUrl} alt={amenity.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-semibold mb-2">{amenity.name}</h2>
            <p className="text-gray-600">{amenity.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AmenitiesGuide;
