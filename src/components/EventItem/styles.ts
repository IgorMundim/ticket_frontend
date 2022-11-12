import styled, { css } from 'styled-components';

export const Container = styled.div`
   
   width: 34rem;
   margin: 0 auto;
   display: grid;
   grid-template-rows: 19rem 1fr ;
`;
export const Detail = styled.div`
   ${({ theme }) => css`
   border-bottom: .3rem solid ${theme.colors.gray2};
   border-left: .3rem solid ${theme.colors.gray2};
   border-right: .3rem solid ${theme.colors.gray2};
   border-radius: 0 0 0.7rem 0.7rem;
   display: grid;
   grid-template-columns: 1fr 4fr;
   `}
`;

export const Description = styled.div`
   padding: 1rem;
   > h3 {   
     word-wrap: break-word;
     cursor: pointer;
  } 
`;

export const Date = styled.div`
   word-wrap: break-word;
   padding: 1rem;
   text-align: center;
`;
export const Image = styled.img`
   border-radius: 0.7rem 0.7rem 0 0;
   width: 100%;
   height: 100%; 
   cursor: pointer;
`;
