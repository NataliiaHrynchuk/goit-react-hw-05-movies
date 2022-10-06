import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
margin-left: 12px;
padding: 4px;
display: inline-flex;
align-items: center;
gap: 4px;
text-decoration: none;
border: 1px solid black;
border-radius: 4px;
color: black;
background-color: #c6bacb;

:hover, :focus {
    color: white;
    background-color:#c71585;
}
`;