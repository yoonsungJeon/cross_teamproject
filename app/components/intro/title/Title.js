// src/components/intro/title/Title.js

import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const StyledTitle = styled.Text`
    color: #000;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
`;

const StyledSubTitle = styled.Text`
    color: #000;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

const Title = (props) => {
    return (
        <View>
            <StyledTitle>{props.children}</StyledTitle>
            <StyledSubTitle>{props.subtitle}</StyledSubTitle>
        </View>
    );
};

export default Title;