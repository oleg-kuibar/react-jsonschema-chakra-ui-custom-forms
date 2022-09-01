import Head from 'next/head';
import { AccordionForm } from '../features/accordion-form';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <AccordionForm />
    </>
  );
}
