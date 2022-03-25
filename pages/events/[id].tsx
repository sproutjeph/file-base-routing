import { useRouter } from 'next/router';
import {
  ErrorAlert,
  EventContent,
  EventLogistics,
  EventSummary,
} from '../../components';
import { getEventById } from '../../dummy-data';

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.id;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
