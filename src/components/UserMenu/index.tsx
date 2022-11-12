import Link from 'next/link';
import * as Styled from './styles';
import { signOut } from 'next-auth/react';
import React from 'react';

export const UserMenu = () => {
  return (
    <Styled.Container>
      <Styled.Avatar
        src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
        alt="sd"
      />
      <Styled.ContainerOptions>
        <Styled.Options>
          <li>
            <Link href="/user/profile/" passHref>
              <Styled.RedLink target="_self">Editar Perfil</Styled.RedLink>
            </Link>
          </li>
          <li>
            <Styled.RedLink onClick={() => signOut()} target="_self">
              Sair
            </Styled.RedLink>
          </li>
        </Styled.Options>
      </Styled.ContainerOptions>
    </Styled.Container>
  );
};
