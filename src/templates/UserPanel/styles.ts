import styled, { css } from 'styled-components';
export const Container = styled.div`
    ${({ theme }) => css`
    
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr 4fr;
    max-width: 80rem;
    margin: 4rem auto;
    padding: 3rem;
    width: 100%;
    border: 0.3rem solid ${theme.colors.gray2};
    @media ${theme.media.lteMedium}{
    border: none;
    display: flex;
    flex-flow: column wrap;
  }
  `}
`;
export const MenuContainer = styled.nav`
    display: flex;
    flex-flow: column wrap;
    align-content: center;
`;
