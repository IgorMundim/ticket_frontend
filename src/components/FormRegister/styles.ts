import styled, { css } from 'styled-components';

export const Container = styled.form``;
export const ButtonContainer = styled.div`
  > button {
    width:100%;
    margin-top: 3rem;

  }
`;

export const Terms = styled.div`
${({ theme }) => css`
  display: flex;
  justify-content: center;
  
  >span{
    text-align: center;
    > a {
    color: ${theme.colors.secondary};
    text-decoration: none;
    margin: 0 0.3rem;
    }
  }
`}
`;
export const Login = styled.div`
${({ theme }) => css`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  > a {
    color: ${theme.colors.secondary};
    text-decoration: none;
    margin: 0 0.3rem;
  }
`}
`;
