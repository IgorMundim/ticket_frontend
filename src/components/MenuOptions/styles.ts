import styled, { css } from 'styled-components';
import { MenuOptionsProps } from '.';

export const Container = styled.a<MenuOptionsProps>`
  ${({ theme, isActive }) => css`
    border: 0.1rem solid ${theme.colors.gray2};
    display: block;
    text-decoration: none;
    background-color: ${
      isActive ? theme.colors.background : theme.colors.white
    };
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.gray5};
    position: relative;
    width: 100%;
    cursor: pointer;
    &:hover{
      background-color: ${theme.colors.secondary};
    }
  `}
`;
