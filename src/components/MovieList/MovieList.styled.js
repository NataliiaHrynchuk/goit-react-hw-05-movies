import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    gap: 12px;
    padding: 0;
    border-bottom: solid 1px grey;
    box-shadow: 0px 3px 3px -3px rgba(0,0,0,0.55);
`;

export const MovieItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 200px;
    height: 320 px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    border-radius: 5px;
    text-decoration: none;
    color: black;
    transition-duration: 300ms;
    &:hover {
        cursor: pointer;
        transform: scale(1.03);
        box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;
    }
`

export const StyledLink = styled(NavLink)`
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;
`;

export const Poster = styled.img`
    padding: 0px;
    margin: 0px; 
    /* height: 260px; */
    width: 100%;
    display: block;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;