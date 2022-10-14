import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 4px;
background-color: #eae2eb;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-width: 800px;
    max-width: 1200px;
    padding: 8px 0;
    background-color: #dec1e3;
    border-radius: 4px;
    box-shadow: 0px 7px 10px 0px rgba(0,0,0,0.75);
    border-bottom: 1px solid gray;

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
`;