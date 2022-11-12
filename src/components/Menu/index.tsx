import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { NavLinks } from '../NavLinks';

import { MenuLinkProps } from '../MenuLink';
export type MenuProps = {
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
};

export const Menu = ({ links = [], logoData }: MenuProps) => {
  return (
    <>
      <Styled.Container>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />

            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
