import Head from 'next/head';
import { Footer, FooterProps } from '../../components/Footer';
import { LogoLinkProps } from '../../components/LogoLink';
import { Menu } from '../../components/Menu';

import { MenuLinkProps } from '../../components/MenuLink';
import * as Styled from './styles';

export type BaseProps = {
  children?: React.ReactNode;
  links: MenuLinkProps[];
  logoData: LogoLinkProps;
  footer: FooterProps;
};

export const Base = ({ links, logoData, footer, children }: BaseProps) => {
  return (
    <>
      <Head>
        <title>SGE</title>
      </Head>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footer={footer} />
      </Styled.Container>
    </>
  );
};
