import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 50rem;
    margin: 5rem auto;
    backgorund: ${theme.colors.white};
    padding: ${theme.spacings.xlarge};
    > button {
    width:100%;
    margin-bottom: 3rem;

  }
  `}
`;
