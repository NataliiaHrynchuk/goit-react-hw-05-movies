import styled from "styled-components";

export const SearchForm = styled.form`
    display: flex;
    margin-left: 10px;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`;

export const SearchFormBtn = styled.button`
    display: inline-block;
    height: 31px;
    padding: 4px;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    border: solid 1px #b7b2b2;
    :hover {
        background-color: #139cd1;
        color: white;
        border: solid 1px #139cd1;
        opacity: 1;
    }
`;

export const SearchFormInput = styled.input`
    display: inline-block;
    width: 100%;
    height: 100%;
    font: inherit;
    font-size: 20px;
    border: solid 1px #b7b2b2;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    :focus {
        border: solid 1px #139cd1;
    }
    ::placeholder {
        font: inherit;
        font-size: 18px;
}
`;