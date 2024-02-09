import React from "react";
import { Button, Card } from "flowbite-react";

const Report = () => {
  const type = [
    {
      title: "Theft",
      desc: "Report incidents of stolen property or identity theft for investigation.",
    },
    {
      title: "Assault",
      desc: "Document physical or verbal attacks against individuals for legal action.",
    },
    {
      title: "Fraud",
      desc: "Report cases of deception or financial scams for investigation and prevention.",
    },
    {
      title: "Cybercrime",
      desc: "Report online theft, hacking, or digital harassment for cybercrime investigation.",
    },
    {
      title: "Harassment",
      desc: "Report cases of stalking, bullying, or intimidation for legal intervention.",
    },
    {
      title: "Vandalism",
      desc: "Report incidents of property damage or destruction for restitution and prosecution.",
    },
    {
      title: "Domestic Violence",
      desc: "Report incidents of physical, emotional, or financial abuse within the household for protection and support.",
    },
    {
      title: "Drug-related Offenses",
      desc: "Report drug trafficking, possession, or distribution for law enforcement intervention.",
    },
    {
      title: "Human Trafficking",
      desc: "Report instances of forced labor, sexual exploitation, or trafficking for rescue and prosecution.",
    },
  ];

  const CardP = ({ title, desc }) => {
    return (
      <Card className="max-w-sm m-7 scale-100 hover:scale-105">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 m-3">
          {title}
        </h5>
        <p className="font-normal text-gray-700 m-3">{desc}</p>
        <Button className="m-3 hover:bg-cyan-700">Register a Complaint</Button>
      </Card>
    );
  };
  return (
    <div>
      <h1 className="w-fit mx-auto text-5xl font-bold mt-4">
        Reportable Crimes: Speak Up, Take Action
      </h1>
      <div className="grid grid-cols-3">
        {type.map((i, index) => (
          <CardP title={i.title} desc={i.desc} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Report;
