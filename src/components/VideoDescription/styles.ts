import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.small};
    width: 100%;
  `}
`;

export const Video = styled.iframe`
  width: 600px; 
  height: 315px;
`;
