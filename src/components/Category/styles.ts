import styled, { css } from 'styled-components';

export const Container = styled.div`

    display:  flex;
    flex-flow: row wrap;
    justify-content: center;
    text-align: center;
`;

export const Item = styled.div`
    margin:2rem;
`;
export const Category = styled.div` 
  width: 12rem;
  height: 12rem;
`;
export const Image = styled.img`
  ${({ theme }) => css`
  border: .3rem solid ${theme.colors.background}; 
  border-radius: 50%; 
  width: 100%;
  height: 100%;
  cursor: pointer;
  `}
`;
export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
