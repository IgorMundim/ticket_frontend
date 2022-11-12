import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
  color: ${theme.colors.gray5};
  display: flex;
  align-items: center;
  text-decoration: none;
  
  > img {
    height: 3rem;
  }
  `}
`;
