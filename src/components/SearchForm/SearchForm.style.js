import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    width: 400px;
    height: 32px;
    max-width: 600px;
    background-color: #fff;
    border: solid 1px #c71585;
    border-radius: 4px;
    overflow: hidden;
`;

export const SearchFormBtn = styled.button`
    display: inline-block;
    height: 100%;
    padding: 4px;
    opacity: 0.8;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    border: none;
    color: black;
    background-color: #c6bacb;
    :hover, :focus {
        color: white;
        background-color:#c71585;
        border: solid 1px #c71585;
        opacity: 1;
    }
`;

export const SearchFormInput = styled.input`
box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 100%;
    font: inherit;
    font-size: 16px;
    vertical-align: middle;
    /* border: solid 1px #c71585; */
    border: none;
    outline: none;
    padding: 4px;
    /* padding-left: 4px;
    padding-right: 4px; */
    /* :focus {
        border: solid 1px #139cd1;
    } */
    ::placeholder {
        font: inherit;
        font-size: 18px;
}
`;