import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    @media ${theme.media.lteMedium}{
      display:  flex;
      flex-flow: row wrap;
      justify-content: center;
      padding: 1rem;

    }
`}
`;
export const Description = styled.div`
 ${({ theme }) => css`

  width: 100%;
  @media ${theme.media.lteMedium}{
    > h2{
        text-align: center;
      }
  }
  `}
`;
export const Date = styled.div`
  margin-top: 2rem;
  display: flex;
  margin-bottom: 1rem;
  > p {
    margin-left: 0.7rem;
  }
  > svg {
    margin: auto 0;
    max-height: 2rem;
    max-width: 2rem;
  }
  
`;

export const Address = styled.div`
  display: flex;
  > p {
    margin-left: 0.7rem;
  }
  > svg {
    margin: auto 0;
    max-height: 2rem;
    max-width: 2rem;
  }
  
`;

export const Button = styled.button`
${({ theme }) => css`
  cursor: pointer;
  font-size: 2rem;
  color: ${theme.colors.buttonColor};
  background-color: ${theme.colors.secondary};
  height: 5rem;
  width: 30rem;
  border-radius: 2.5rem;
  &:hover {
      filter: brightness(90%);
    }
  @media ${theme.media.lteMedium}{
    margin-top: 2rem;
    width: 25rem;
    }
`}
`;
