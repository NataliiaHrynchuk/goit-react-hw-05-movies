import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
display: flex;
flex-direction: column;
gap: 16px;
align-items: center;
padding: 12px;
background-color: #eae2eb;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* justify-content: space-between; */
    gap: 12px;
    max-width: 1200px;
    padding: 8px 0;
    background-color: #dec1e3;
    border-radius: 4px;
    box-shadow: 0px 7px 10px 0px rgba(0,0,0,0.75);
    border-bottom: 1px solid gray;
    @media screen and (min-width: 768px){
        max-width: 768px;
    }

    @media screen and (min-width: 1200px){
        max-width: 1020px;
        justify-content: start;
    }

    > nav {
    display: flex;
    }
`;
export const Link = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 800;
    transition-duration: 300ms;

    &.active {
    color: #C71585;
    }

    &:hover {
        transform: scale(1.03);
    }

    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`;