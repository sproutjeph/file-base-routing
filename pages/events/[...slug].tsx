import { useRouter } from 'next/router';
import { Button, ErrorAlert, EventList, ResultTitle } from '../../components';
import { getFilteredEvents } from '../../helpers/api-util';

const FilteredEventsPage = ({ hasError, filteredEvents }: any) => {
  const { query } = useRouter();

  const filteredData = query.slug;

  if (!filteredData) {
    return <p className="center">Loading.....</p>;
  }

  const filteredYear = Number(filteredData[0]);
  const filteredMonth = Number(filteredData[1]);

  if (hasError) {
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

  const date = new Date(filteredYear, filteredMonth - 1);
  return (
    <>
      <ResultTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const filteredData = params.slug;

  const filteredYear = Number(filteredData[0]);
  const filteredMonth = Number(filteredData[1]);

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredMonth > 12
  ) {
    return {
      props: { hasError: true },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      filteredEvents: filteredEvents,
    },
  };
}

export default FilteredEventsPage;
