import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-aling: center;
    boder-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${TextComponent} {
        font-size: ${theme.font.sizes.small};
      }

    & ${SectionContainer} {
      padding-top: 0;
      padding-botton: 0;
    }
  `}
`;
