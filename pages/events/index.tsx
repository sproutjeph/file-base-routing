import { useRouter } from 'next/router';
import { EventList, EventSearch } from '../../components';
import { getAllEvents } from '../../dummy-data';

const AllEventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const onSearch = (month: string, year: string) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <EventSearch onSearch={onSearch} />
      <EventList events={allEvents} />
    </>
  );
};

export default AllEventsPage;
