import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  
`;
export const Category = styled.div`
  width: 22rem;
  padding: 0 5rem;
  flex-shrink: 0;
  cursor: pointer;
  
`;
export const Image = styled.img`  
  border-radius: 50%; 
  width: 100%;
  height: 12rem;
`;
export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
