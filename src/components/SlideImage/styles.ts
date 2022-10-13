import styled, { css } from 'styled-components';

export const Image = styled.img`
${({ theme }) => css`
  width: 100%;
  height: 30rem;
  border: ${theme.spacings.xxtiny} solid ${theme.colors.white};
  border-radius: ${theme.spacings.tiny};
  box-shadow: #070707 0px 12px 12px;

  @media ${theme.media.lteMedium}{
    height: 15rem;
  }
`}
`;
