import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
width: 100px;
margin-left: auto;
margin-right: auto;
padding: 4px;
display: inline-flex;
align-items: center;
gap: 4px;
text-decoration: none;
border: 1px solid black;
border-radius: 4px;
color: black;
background-color: #dec1e3;

:hover, :focus {
    color: white;
    background-color:#c71585;
}

@media screen and (min-width: 1200px) {
    margin-left: 16px;
}
`;