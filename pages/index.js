import { Box, Code } from '@chakra-ui/react';
import Head from 'next/head';
import SchemaInfo from '../components/SchemaInfo';
import { AccordionForm } from '../features/accordion-form';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <AccordionForm />
      <Box h="5vh" />
      <SchemaInfo />
    </>
  );
}
