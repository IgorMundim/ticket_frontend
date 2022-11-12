import styled, { keyframes, css } from 'styled-components';

const showFade = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
 `;

export const Container = styled.div`
    display: block;
    padding: 0.8rem;
    position: relative;
    max-width: 5.4rem;
    &:hover {
        > div {
            display:block;
        }
        > ul { 
            display: block;
        }
    }  
`;

export const Profiles = styled.div`
    cursor: pointer;


`;
export const Avatar = styled.img`
    margin: auto;
    display: flex;
    justify-content: center;
    height: 3.7rem;
    width: 3.7rem;
    border-radius: 50%;
    z-index: 2; 
`;
export const ContainerOptions = styled.div`
    ${({ theme }) => css`
    margin-top: 0.9rem;
    border: 0.3rem solid  ${theme.colors.gray2};
    border-radius: .3rem;
    background-color: ${theme.colors.background};
    display: none;
    position: absolute;
    right:0;
    `}
`;
export const Options = styled.ul`
    margin: 0;
    animation: ${showFade} .3s;
    > li {
        margin-top: 1rem;
        width:13rem;
        list-style-type: none;
        cursor: pointer;
    }
`;
export const RedLink = styled.a`
    ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.gray5};
    width: 100%;
    cursor: pointer;
    `}
`;
