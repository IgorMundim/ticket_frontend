import { GetServerSideProps } from 'next';
import { serverSideRedirect } from '../../utils/server-side-redirect';
import { getSession } from 'next-auth/react';
import { pageService } from 'api/service/pages';
import Subscription, { SubscriptionProps } from 'templates/Subscription';

export default function SubscriptionPage({ base }: SubscriptionProps) {
  return <Subscription base={base} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return serverSideRedirect(context);
  }

  const { base } = await pageService.base();
  if (!base) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      session,
      base,
    },
  };
};
