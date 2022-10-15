import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 12px;
    padding: 16px;
    border-bottom: solid 1px grey;
    box-shadow: 0px 3px 3px -3px rgba(0,0,0,0.55);
    @media screen and (min-width: 1200px) {
        max-width: 1200px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 12px;
    padding: 12px 0;
    border-bottom: solid 1px grey;
    box-shadow: 0px 3px 3px -3px rgba(0,0,0,0.55);
    @media screen and (min-width: 768px) {
        max-width: 768px;
        flex-direction: row;
        gap: 12px;
    }
    @media screen and (min-width: 1200px) {
        max-width: 1020px;
    }
`;

export const Poster = styled.img`
width: 100%;
max-width: 400px;
margin-left: auto;
margin-right: auto;
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    border-bottom: gray;
    gap: 12px;
    @media screen and (min-width: 768px) {
        align-items: flex-start;
    }

    @media screen and (min-width: 1200px) {
        padding: 16px;
    }
`;
export const BigTitle = styled.h2`
    @media screen and (min-width: 1200px) {
        font-size: 30px;
    }
`;

export const MiddleTitle = styled.h3`
    @media screen and (min-width: 1200px) {
        font-size: 24px;
    }
`;

export const SmallTitle = styled.h4`
    @media screen and (min-width: 1200px) {
        font-size: 20px;
    }
`;

export const Text = styled.p`
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 24px;
    }
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

    @media screen and (min-width: 1200px) {
        font-size: 24px;
    }
`;

export const DetailsList = styled.ul`
    display: flex;
    flex-direction: column; 
    gap: 20px;
    list-style: none;
    padding: 0;
    text-align: center;

    @media screen and (min-width: 768px) {
        text-align: left;
    }
`;
