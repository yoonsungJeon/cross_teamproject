// src/components/intro/title/SubTitle.js

import React from "react";
import styled from "styled-components/native";

const StyledSubTitle = styled.Text`
    color: #000;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin-top: 1em;
`;

const SubTitle = (props) => {
    return (
        <StyledSubTitle>{props.children}</StyledSubTitle>
    )
};

export default SubTitle;