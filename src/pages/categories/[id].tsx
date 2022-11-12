import { eventsService } from '../../api/service/events';
import { pageService } from '../../api/service/pages';

import { GetStaticProps } from 'next';
import { Categories, CategoryPageProps } from '../../templates/Categories';

export default function CategoryPage({
  category,
  base,
  events,
}: CategoryPageProps) {
  // const { data: session } = useSession();

  return <Categories base={base} category={category} events={events} />;
}

export async function getStaticPaths() {
  let paths = [];
  const categories = await eventsService.categories();
  paths = categories.map((category) => ({
    params: { id: category.id.toString() },
  }));
  return {
    paths: paths,
    fallback: 'blocking', // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  let category = null;
  let events = null;
  const { base } = await pageService.base();
  try {
    category = await eventsService.category(context.params.id as string);
    events = await eventsService.events();
  } catch (error) {
    return { notFound: true };
  }

  if (!category && !base) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
      base,
      events,
    },
    revalidate: 10,
  };
};
