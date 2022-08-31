import Head from 'next/head';
import { AccordionForm } from '../features/accordion-form';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>Create Next App</title>
      </Head>
      <AccordionForm />
    </ChakraProvider>
  );
}
