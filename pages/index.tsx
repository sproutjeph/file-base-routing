import type { NextPage } from 'next';
import Head from 'next/head';
import { EventList, NewsLetterReg } from '../components';
import { getFeaturedEvents } from '../helpers/api-util';
import { IEvent } from '../types';

const HomePage: NextPage = ({ featuredEvents }: any) => {
  return (
    <>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Find Next.js  Events around you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsLetterReg />

      <EventList events={featuredEvents} />
    </>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
