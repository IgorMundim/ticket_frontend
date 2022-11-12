import { eventsService } from '../../api/service/events';
import { pageService } from '../../api/service/pages';

import { GetStaticProps } from 'next';
import { Event, EventPageProps } from '../../templates/Event';

export default function EventPage({ base, event }: EventPageProps) {
  // const { data: session } = useSession();

  return <Event base={base} event={event} />;
}

export async function getStaticPaths() {
  let paths = [];
  const events = await eventsService.events();
  paths = events.map((event) => ({
    params: { id: event.id.toString() },
  }));
  return {
    paths: paths,
    fallback: 'blocking', // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  let event = null;
  const { base } = await pageService.base();
  try {
    event = await eventsService.event(context.params.id as string);
  } catch (error) {
    return { notFound: true };
  }

  if (!event && !base) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
      base,
    },
    revalidate: 10,
  };
};
