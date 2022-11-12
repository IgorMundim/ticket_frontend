import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    
    display: flex;
    justify-content: center;
    padding: 3rem;
    text-align: center;
    boder-top: 0.1rem solid ${theme.colors.gray5};
    background-color: ${theme.colors.background};
    a {
      color: inherit;
      text-decoration: none;
    }

    & ${TextComponent} {
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.gray2};
      }
    >div{
      > svg {
        width: 2rem;
        height: 2rem;
        color: white;
        margin: 4rem 0.5rem 2rem 0.5rem;
      
     }
    }
  `}
`;

export const Image = styled.div` 
  max-width: 10rem;
  max-height: 10rem;
  > img{
    width: 100%;
    height: 100%;
  }


`;
