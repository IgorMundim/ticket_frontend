import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => css`
  margin-top:${theme.spacings.xxsmall};
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
  position: relative;
`}
`;

export const List = styled.div`
  display: flex;

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

export const Image = styled.img`
${({ theme }) => css`
  width: 100%;
  height: 30rem;
  border: ${theme.spacings.xxtiny} solid ${theme.colors.white};
  border-radius: ${theme.spacings.tiny};
  box-shadow: #070707 0px 12px 12px;

  @media ${theme.media.lteMedium}{
    height: 15rem;
  }
`}
`;

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

export const GoLeft = styled.div`
  ${({ theme }) => css`
    left: ${theme.spacings.xsmall};
    position: absolute;
    z-index: 3;
  `}
`;

export const GoRight = styled.div`
  ${({ theme }) => css`
    right: ${theme.spacings.xsmall};
    position: absolute;
    z-index: 3;
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`    
    background: transparent;
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    border: none;
    z-index: 3;
    
  `}
`;

export const Control = styled.div`    
    z-index: 3;
    padding-top: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;

`;
