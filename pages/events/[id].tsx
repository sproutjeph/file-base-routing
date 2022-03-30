import Head from 'next/head';
import {
  Comments,
  ErrorAlert,
  EventContent,
  EventLogistics,
  EventSummary,
} from '../../components';
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from '../../helpers/api-util';

const EventDetailPage = ({ event }: any) => {
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
    </>
  );
};

export async function getStaticProps(context: any) {
  const eventId = context.params.id;

  const selectedEvent = await getEventById(eventId);

  return {
    props: {
      event: selectedEvent,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { id: event.id } }));

  return {
    paths: paths,

    fallback: 'blocking',
  };
}

export default EventDetailPage;
