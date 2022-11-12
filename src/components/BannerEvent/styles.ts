import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
      position: relative;
      width: 100%; 
      height: 40vh;
      @media ${theme.media.lteMedium}{
        height: 25vh;
      }
  `} 
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  filter: brightness(90%);
`;
