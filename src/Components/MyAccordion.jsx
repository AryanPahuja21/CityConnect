import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div className="m-10">
    <Accordion open={open === 1} className="mb-2 rounded-2xl border border-blue-gray-100 px-4 ">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          What is a smart city?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        A smart city leverages technology and data to improve the quality of
            life for residents, enhance sustainability, and optimize urban
            services such as transportation, energy, and public safety
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         What technologies are typically used in a smart city?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Smart cities utilize a variety of technologies such as Internet of
            Things (IoT) sensors, data analytics, artificial intelligence (AI),
            cloud computing, and communication networks to gather and analyze
            data for better decision-making and resource optimization.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         How does a smart city address environmental sustainability? options.
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Smart cities integrate sustainable practices into urban planning and
            development, such as promoting renewable energy sources, reducing
            carbon emissions, implementing green infrastructure, optimizing
            waste management, and encouraging eco-friendly transportation
        </AccordionBody>
      </Accordion>
    </div>
      
    </>
  );
}