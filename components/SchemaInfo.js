import {
  Box,
  Button,
  CloseButton,
  Flex,
  Slide,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import schema from '../documents/accordion.schema.json';
import { uiSchema } from '../features/accordion-form.ui-schema';

import { syntaxHighlight } from '../utils/SyntaxHighlight';

export default function SchemaInfo() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {!isOpen && (
        <Button mx="5" onClick={onToggle}>
          Toggle JSON Schema Preview
        </Button>
      )}
      <Slide
        direction="bottom"
        in={isOpen}
        style={{
          zIndex: 10,
          overflowY: 'auto',
          height: '50vh',
          background: '#2D3748',
        }}
      >
        <Flex w="100%" h="100%" flexDir="column">
          <CloseButton
            onClick={onToggle}
            color="white"
            pos="absolute"
            right={1}
            top={1}
          />
          <Flex>
            <Flex w="50%" flexDir="column">
              <Text bg="gray.900" color="white" px="2" w="100%" py="10px">
                Schema
              </Text>
              <Box p="10px" color="white" w="100%" bg="gray.700">
                <pre
                  dangerouslySetInnerHTML={{
                    __html: syntaxHighlight(
                      JSON.stringify(schema[0], undefined, 3)
                    ),
                  }}
                ></pre>
              </Box>
            </Flex>
            <Flex w="50%" flexDir="column">
              <Text bg="gray.900" color="white" px="2" w="100%" py="10px">
                UI Schema
              </Text>
              <Box p="10px" color="white" w="100%" bg="gray.700">
                <pre
                  dangerouslySetInnerHTML={{
                    __html: syntaxHighlight(
                      JSON.stringify(uiSchema, undefined, 3)
                    ),
                  }}
                ></pre>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Slide>
    </>
  );
}
