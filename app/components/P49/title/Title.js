// src/components/page49/title/Title.js

import React from "react";
import styled from "styled-components/native";

const StyledTitle = styled.Text`
    color: #000;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
`;

const Title = (props) => {
    return (
            <StyledTitle>{props.children}</StyledTitle>
    );
};

export default Title;