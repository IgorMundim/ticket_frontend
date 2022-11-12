import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    height:100%;
    @media ${theme.media.lteMedium} {
      /* flex-flow: column wrap;
      align-content: center; */
    }
  `}
`;

export const Loading = styled.div`
    height: 5.3rem;
`;
