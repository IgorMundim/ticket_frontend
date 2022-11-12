import { GetServerSideProps } from 'next';
import { serverSideRedirect } from '../../utils/server-side-redirect';
import { getSession } from 'next-auth/react';
export default function Subscription() {
  // const { data: session } = useSession();

  return <div>Oi</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return serverSideRedirect(context);
  }

  return {
    props: {
      session,
    },
  };
};
