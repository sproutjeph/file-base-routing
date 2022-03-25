import type { NextPage } from 'next';
import Head from 'next/head';
import { EventList } from '../components';
import { getFeaturedEvents } from '../dummy-data';
import { IEvent } from './types';

const HomePage: NextPage = () => {
  const featuredEvents: IEvent[] = getFeaturedEvents();

  return (
    <div className="">
      <Head>
        <title>Next Demo</title>
        <meta name="description" content="Next Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <EventList events={featuredEvents} />
      </main>
    </div>
  );
};

export default HomePage;
