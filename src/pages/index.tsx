import Home from '../templates/Home';

import { HomeProps } from '../templates/Home/index';
import { pageService } from '../api/service/pages';
import { eventsService } from '../api/service/events';

import { GetStaticProps } from 'next';

export default function Index({ home, categories, events }: HomeProps) {
  return <Home home={home} categories={categories} events={events} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { home } = await pageService.home();
  const categories = await eventsService.categories();
  const events = await eventsService.events();
  if (!home) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      home,
      categories,
      events,
    },
    revalidate: 10,
  };
};
