import { pageService } from 'api/service/pages';
import { accountService } from 'api/service/account';
import { GetServerSideProps } from 'next';
import { useSession, getSession } from 'next-auth/react';
import { UserPanel, UserPanelProps } from 'templates/UserPanel';
import { serverSideRedirect } from '../../utils/server-side-redirect';

export default function Page({ base, customer, addressData }: UserPanelProps) {
  const { status } = useSession();
  if (status === 'loading') {
    return <p>Loading</p>;
  }
  if (status == 'unauthenticated') {
    return {
      notFound: true,
    };
  }

  return (
    <UserPanel base={base} customer={customer} addressData={addressData} />
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  let addresses = {};
  let customer = {};
  let addressData = [];
  if (!session) {
    return serverSideRedirect(ctx);
  }
  const { base } = await pageService.base();

  if (!base) {
    return {
      notFound: true,
    };
  }
  try {
    customer = await accountService.currentCustomer(
      session.access_token,
      session.id,
    );
    addresses = await accountService.currentAddress(
      session.access_token,
      session.id,
    );
    if (addresses[0]) addressData = addresses[0];
  } catch (error) {
    null;
  }

  return {
    props: {
      session,
      base,
      customer,
      addressData,
    },
  };
};
