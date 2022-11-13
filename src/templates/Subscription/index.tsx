import * as Styled from './styles';
import { MenuLinkProps } from 'components/MenuLink';
import { LogoLinkProps } from 'components/LogoLink';
import { Base } from 'templates/Base';
import { FooterProps } from 'components/Footer';
import { Heading } from 'components/Heading';

type BaseProps = {
  title: string;
  slug: string;
  menuLink: MenuLinkProps[];
  logoLink: LogoLinkProps;
  footer: FooterProps;
};
export type SubscriptionProps = {
  base: BaseProps;
};

function Subscription({ base }: SubscriptionProps) {
  const { menuLink, logoLink, footer } = base;
  const { text, link, srcImg } = logoLink;

  return (
    <Base links={menuLink} footer={footer} logoData={{ text, link, srcImg }}>
      <Styled.Container>
        <Heading as="h1" size="large">
          A sua inscrição foi realizada com sucesso! Você receberá informações
          sobre o acesso por e-mail.
        </Heading>
      </Styled.Container>
    </Base>
  );
}

export default Subscription;
