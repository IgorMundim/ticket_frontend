import styled, { css } from 'styled-components';

export const Container = styled.div`
 ${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem;
  height: 54vh;

  > h1 {
        color: ${theme.colors.secondary};
        text-align: center;
      }
    @media ${theme.media.lteMedium}{
        >h1 {
            font-size: 2rem;
        }
        height: 60vh;
    }
`}
`;
