import Register, { RegisterProps } from '../../templates/Register';

import { pageService } from '../../api/service/pages';
import { GetStaticProps } from 'next';

export default function RegisterBase({ base }: RegisterProps) {
  return <Register base={base} />;
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
