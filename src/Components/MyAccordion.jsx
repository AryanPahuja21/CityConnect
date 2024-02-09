import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MyAccordion() {
  return (
    <Stack spacing={1}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="body1" component="div">
            What is a smart city?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1" component="div">
            A smart city leverages technology and data to improve the quality of
            life for residents, enhance sustainability, and optimize urban
            services such as transportation, energy, and public safety
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="body1" component="div">
            What technologies are typically used in a smart city?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1" component="div">
            Smart cities utilize a variety of technologies such as Internet of
            Things (IoT) sensors, data analytics, artificial intelligence (AI),
            cloud computing, and communication networks to gather and analyze
            data for better decision-making and resource optimization.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="body1" component="div">
            How does a smart city address environmental sustainability? options.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle" component="div">
            Smart cities integrate sustainable practices into urban planning and
            development, such as promoting renewable energy sources, reducing
            carbon emissions, implementing green infrastructure, optimizing
            waste management, and encouraging eco-friendly transportation
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="body1" component="div">
            Who can I contact if I have more questions about our smart city's
            initiatives?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1" component="div">
            You can reach out to the relevant city departments or agencies
            responsible for smart city projects, or contact our customer service
            team for assistance and inquiries.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}

export default MyAccordion;
