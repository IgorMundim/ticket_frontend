import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Description = styled.div`
  ${({ theme }) => css`
   /* background: linear-gradient(to top, ${theme.colors.primary}, transparent); */
   position: absolute;
   bottom: 0; 
   padding: ${theme.spacings.mediumSmall};
   
   > h3 {
    position: relative;
    top: ${theme.spacings.tiny};
   }
  `}
`;

export const Slide = styled.div`
${({ theme }) => css` 
  cursor: grab;
  position: relative;
  width: 90vw;
  flex-shrink: 0;
  flex-direction: column;
  padding: 0 ${theme.spacings.xxsmall};
  border-radius: ${theme.spacings.tiny};

  `}
`;
