import styled, { css } from 'styled-components';

export const Image = styled.img`
${({ theme }) => css`
  width: 100%;
  height: 30rem;
  border: ${theme.spacings.xxtiny} solid ${theme.colors.white};
  border-radius: ${theme.spacings.tiny};
  margin-bottom: 1rem;
  box-shadow: ${theme.colors.background} 0px 6px 9px;
  filter: brightness(90%);

  @media ${theme.media.lteMedium}{
    height: 15rem;
  }
`}
`;
