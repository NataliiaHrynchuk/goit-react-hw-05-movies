import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0;
    margin-bottom: 16px;
    background-color: #dec1e3;
    box-shadow: 3px 15px 10px -9px rgba(0,0,0,0.75);
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
        /* text-decoration: underline; */
        transform: scale(1.03);
    }
`;