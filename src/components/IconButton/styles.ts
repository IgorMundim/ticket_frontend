import styled, { css, DefaultTheme } from 'styled-components';

export type IconButtonSizeProps = {
  colorDark: boolean;
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'normal'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge'
    | 'xhuge'
    | 'xxhuge'
    | 'hero'
    | 'xhero'
    | 'xxhero';
};

const iconSize = {
  xxsmall: (theme: DefaultTheme) => css`
    width:${theme.font.sizes.xxsmall};
    height:${theme.font.sizes.xxsmall};
  `,
  xsmall: (theme: DefaultTheme) => css`
    width:${theme.font.sizes.xsmall};
    height:${theme.font.sizes.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    width:${theme.font.sizes.small};
    height:${theme.font.sizes.small};
  `,
  normal: (theme: DefaultTheme) => css`
    width:${theme.font.sizes.normal};
    height:${theme.font.sizes.normal};
  `,
  medium: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.medium};
    height: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.large};
    height: ${theme.font.sizes.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    width:${theme.font.sizes.xlarge};
    height:${theme.font.sizes.xlarge};
  `,
  xxlarge: (theme: DefaultTheme) => css`
    width: ${theme.font.sizes.xxlarge};
    height: ${theme.font.sizes.xxlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    width:${theme.font.sizes.huge};
    height:${theme.font.sizes.huge};
  `,
  xhuge: (theme: DefaultTheme) => css`
    width:${theme.font.sizes.xhuge};
    height:${theme.font.sizes.xhuge};
  `,
  xxhuge: (theme: DefaultTheme) => css`
    width:${theme.font.sizes.xxhuge};
    height:${theme.font.sizes.xxhuge};
  `,
  hero: (theme: DefaultTheme) => css`
    width:${theme.font.sizes.hero};
    height:${theme.font.sizes.hero};
  `,
  xhero: (theme: DefaultTheme) => css`
    width:${theme.font.sizes.xhero};
    height:${theme.font.sizes.xhero};
  `,
  xxhero: (theme: DefaultTheme) => css`

    width:${theme.font.sizes.xxhero};
    height:${theme.font.sizes.xxhero};
  `,
};

export const Container = styled.button<IconButtonSizeProps>`
  ${({ theme, size, colorDark }) => css`
    color: ${colorDark ? theme.colors.primary : theme.colors.white};
    cursor: grab;
    background: transparent;
    ${iconSize[size](theme)};
    border: none;
    left: ${theme.spacings.xsmall};
    z-index: 3;
  `}
`;
