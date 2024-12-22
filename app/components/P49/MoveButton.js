// src/components/MoveButton.js

import React from "react";
import styled from "styled-components/native";
import { router } from "expo-router";

const StyledButton = styled.TouchableOpacity`
    background-color: #007BFF;
    width: 70px;
    height: 20px;
    border: 1px solid #FFF;
    margin-top: 10px;
`;

const StyledButtonText = styled.Text`
    color: #FFF;
    font-size: 14px;
    text-align: center;
`;

const _onPress = (page) => {
    router.replace("/P50")
}

const MoveButton = (props) => {
    return (
        <StyledButton
            onPress={_onPress(props.page)}
        >
            <StyledButtonText>{props.children}</StyledButtonText>
        </StyledButton>
    )
}

export default MoveButton;