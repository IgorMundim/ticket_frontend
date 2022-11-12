import styled, { css } from 'styled-components';
import { FormCustomerProps } from '.';
export const Container = styled.form<FormCustomerProps>`
  ${({ isVisible }) => css`
    display:  ${isVisible ? 'block' : 'none'};
  `}
  
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: right;
  > button {
    width:10rem;
    margin-bottom: 3rem;
  }
`;
