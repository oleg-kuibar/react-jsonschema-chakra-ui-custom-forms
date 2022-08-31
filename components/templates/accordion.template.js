import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';

// @props - ObjectFieldTemplateProps
export const AccordionTemplate = (props) => {
  return (
    <Accordion>
      {props.properties.map((element) => (
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {props.uiSchema[element.name].title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <h3>{props.uiSchema[element.name].description}</h3>
          <AccordionPanel pb={4}>{element.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
