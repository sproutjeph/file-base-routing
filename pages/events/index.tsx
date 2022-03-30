import Head from 'next/head';
import { useRouter } from 'next/router';
import { EventList, EventSearch } from '../../components';
import { getAllEvents } from '../../helpers/api-util';

const AllEventsPage = ({ allEvents }: any) => {
  const router = useRouter();

  const onSearch = (month: string, year: string) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find allot of events Next.js  Events around you"
        />
      </Head>

      <EventSearch onSearch={onSearch} />
      <EventList events={allEvents} />
    </>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      allEvents: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
