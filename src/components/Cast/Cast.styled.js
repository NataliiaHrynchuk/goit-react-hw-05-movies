import styled from "styled-components";

export const CastList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    @media screen and (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export const CastItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    justify-content: space-between;
    background: rgb(255, 255, 255);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    border-radius: 5px;
    @media screen and (min-width: 768px){
        width: 200px;
    }

    @media screen and (min-width: 768px){
        width: 300px;
    }
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 4px;
    text-align: center;
`;


export const Name = styled.p`
    font-size: 20px;
`;

export const Character = styled.p`
    font-size: 16px;
`;

