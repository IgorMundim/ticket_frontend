import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    
    flex-flow: row;
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
        min-height: 5rem
      }

    > svg {
      width: 2rem;
      height: 2rem;
      color: white;
      margin: 2.5rem 0.5rem;
    
    }

  `}
`;

export const Image = styled.div` 
    width: 100%;
    height: 100%;
  > img{
    margin-top: 3rem;
    max-width: 13rem;
    max-height: 13rem;
  }


`;
