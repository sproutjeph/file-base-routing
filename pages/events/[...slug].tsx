import { useRouter } from 'next/router';
import { Button, ErrorAlert, EventList, ResultTitle } from '../../components';
import { getFilteredEvents } from '../../dummy-data';

const FilteredEventsPage = () => {
  const { query } = useRouter();

  const filteredData = query.slug;

  if (!filteredData) {
    return <p className="center">Loading.....</p>;
  }

  const filteredYear = Number(filteredData[0]);
  const filteredMonth = Number(filteredData[1]);

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Search Terms Please Adjust Your Values</p>;
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Events Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  console.log(filteredYear);

  const date = new Date(filteredYear, filteredMonth - 1);
  return (
    <>
      <ResultTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
