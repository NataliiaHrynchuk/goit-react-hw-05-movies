import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
    display: flex;
    gap: 12px;
    padding: 12px;
    border-bottom: solid 1px grey;
    box-shadow: 0px 3px 3px -3px rgba(0,0,0,0.55);
`;

export const Wrap = styled.div`
    border-bottom: gray;
    padding: 12px;
    border-bottom: solid 1px grey;
    box-shadow: 0px 3px 3px -3px rgba(0,0,0,0.55);
`;

export const Link = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;

    &.active {
    color: #C71585;
    }

    :hover {
        text-decoration: underline;
    }
`;