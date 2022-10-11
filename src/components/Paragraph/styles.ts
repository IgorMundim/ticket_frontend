import styled, { css, DefaultTheme } from 'styled-components';
import { ParagraphProps } from '.';

const paragraphSize = {
  xxsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.normal};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  xxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  xhuge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
  xxhuge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxhuge};
  `,
  hero: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.hero};
  `,
  xhero: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhero};
  `,
  xxhero: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxhero};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;
export const Container = styled.p<ParagraphProps>`
${({ theme, uppercase, colorDark, size }) => css`
  color: ${colorDark ? theme.colors.primary : theme.colors.white};
  ${paragraphSize[size](theme)};
  ${titleCase(uppercase)};
`}
`;
