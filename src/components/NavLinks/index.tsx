import * as Styled from './styles';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import { UserMenu } from 'components/UserMenu';
import { useSession } from 'next-auth/react';

export type NavLinksProps = {
  links?: MenuLinkProps[];
};

export const NavLinks = ({ links = [] }: NavLinksProps) => {
  const { status } = useSession();

  if (status === 'unauthenticated') {
    return (
      <Styled.Container aria-label="Main menu">
        {links.map((link) => (
          <MenuLink key={link.link} {...link} />
        ))}
      </Styled.Container>
    );
  } else if (status === 'authenticated') {
    return (
      <Styled.Container aria-label="Main menu">
        <UserMenu />
      </Styled.Container>
    );
  } else return <Styled.Loading></Styled.Loading>;
};
