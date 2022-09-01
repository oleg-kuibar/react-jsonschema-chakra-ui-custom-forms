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
      {props.properties.map((element, index) => (
        <AccordionItem
          key={`${index}_${element.content.props.uiSchema['ui:options'].title}`}
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {element.content.props.uiSchema['ui:options'].title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <h3>{element.content.props.uiSchema['ui:options'].description}</h3>
          <AccordionPanel pb={4}>{element.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
