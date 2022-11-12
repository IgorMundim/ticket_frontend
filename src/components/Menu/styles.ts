import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: ${theme.colors.background};
    transition: all 300ms ease-in-out;
    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }
  `}
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
