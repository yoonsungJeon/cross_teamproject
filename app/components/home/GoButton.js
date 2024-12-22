// src/components/intro/login/LoginButton.js

import React from "react";
import styled from "styled-components/native";
import { router } from "expo-router";

const StyledButton = styled.TouchableOpacity`
    background-color: #007BFF;
    width: 140px;
    height: 40px;
    border: 1px solid #FFF;
    border-radius: 10px;
    margin-top: 10px;
    justify-content: center;
`;

const StyledButtonText = styled.Text`
    color: #FFF;
    font-size: 14px;
    text-align: center;
`;

const GoButton = (props) => {
    return (
        <StyledButton
            onPress={() => {router.replace(props.page)}}
        >
            <StyledButtonText>{props.children}</StyledButtonText>
        </StyledButton>
    );
};

export default GoButton;