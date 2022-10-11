import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
  position: relative;
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
   color: ${theme.colors.white} ;

   > h3 {
    position: relative;
    top: ${theme.spacings.tiny};
   }
  `}
`;

export const GoLeft = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: grab;
    background: transparent;
    width: 4rem;
    height: 4rem;
    border: none;
    left: ${theme.spacings.xsmall};
    position: absolute;
    z-index: 3;
  `}
`;

export const GoRight = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: grab;
    background: transparent;
    width: 4rem;
    height: 4rem;
    border: none;
    right: ${theme.spacings.xsmall};
    position: absolute;
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

export const Button = styled.button`
  ${({ theme }) => css`    
    color: ${theme.colors.white};
    background: transparent;
    width: 2rem;
    height: 2rem;
    border: none;
    z-index: 3;
    cursor: pointer;
  `}
`;
