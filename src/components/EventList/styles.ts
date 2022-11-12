import styled, { css } from 'styled-components';

export const Container = styled.div`
${({ theme }) => css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${theme.spacings.small};
  
  width:100%;
  @media ${theme.media.lteMedium}{
    grid-template-columns: 1fr;
  }
  `}
`;
