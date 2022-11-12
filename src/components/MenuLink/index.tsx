import Link from 'next/link';
import * as Styled from './styles';

export type MenuLinkProps = {
  text: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ text, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container target={target}>{text}</Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {text}
    </Styled.Container>
  );
};
