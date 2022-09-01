import { Box, Button, Code, Slide, useDisclosure } from '@chakra-ui/react';
import schema from '../documents/accordion.schema.json';

export default function SchemaInfo() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button mx="5" onClick={onToggle}>
        Toggle JSON Schema Preview
      </Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box p="10px" color="white" mt="4" bg="blue.100" shadow="md">
          <Code colorScheme="telegram">
            {JSON.stringify(schema, null, '\t')}
          </Code>
        </Box>
      </Slide>
    </>
  );
}
