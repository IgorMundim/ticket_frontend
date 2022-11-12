import styled, { css } from 'styled-components';

export const Container = styled.form``;
export const ButtonContainer = styled.div`
  > button {
    width:100%;
    margin-bottom: 3rem;

  }
`;
export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small}
  `}
`;

export const ForgotPassword = styled.div`
${({ theme }) => css`
  display: flex;
  justify-content: center;
  > a {
    margin-left: 1rem;
    color: ${theme.colors.secondary};
    text-decoration: none;
  }
`}
`;
export const Register = styled.div`
${({ theme }) => css`
  display: flex;
  justify-content: center;
  margin-top:1rem;
  > a {
    margin-left: 1rem;
    color: ${theme.colors.secondary};
    text-decoration: none;
  }
`}
`;
