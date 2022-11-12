import Login, { LoginProps } from '../../templates/Login';

import { pageService } from '../../api/service/pages';
import { GetStaticProps } from 'next';

export default function LoginPage({ base }: LoginProps) {
  // const { data: session } = useSession();

  return <Login base={base} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { base } = await pageService.base();
  if (!base) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      base,
    },
    revalidate: 3625,
  };
};
