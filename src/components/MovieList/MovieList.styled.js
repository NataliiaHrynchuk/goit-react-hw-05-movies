import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
gap: 12px;
padding: 0;
justify-content: center;
    @media screen and (min-width: 768px){
        max-width: 768px;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 60px;
    }
    @media screen and (min-width: 1200px) {
        max-width: 1020px;
    }
`;

export const MovieItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    margin-bottom: 12px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    transition-duration: 300ms;
    &:hover {
        cursor: pointer;
        transform: scale(1.03);
        box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;
    }
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        width: 300px;
    }
`;

export const StyledLink = styled(NavLink)`
    border-radius: 4px;
    text-decoration: none;
    color: #C71585;
    font-weight: 500;
`;

export const Poster = styled.img`
    padding: 0px;
    margin: 0px; 
    width: 100%;
    display: block;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const MiddleTitle = styled.h3`
    padding: 12px 4px;
    @media screen and (min-width: 1200px) {
        font-size: 24px;
    }
`;