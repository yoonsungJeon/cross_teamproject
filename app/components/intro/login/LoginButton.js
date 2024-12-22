// src/components/intro/login/LoginButton.js

import React from "react";
import styled from "styled-components/native";

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

const checkLogin = (username, password) => {
    const defaultUsername = "test"
    const defaultPasword = "test"

    if(username === defaultUsername && password === defaultPasword) return true;
    else {
        alert("사용자 정보를 찾을 수 없습니다.")
        return false
    };
};

const LoginButton = (props) => {
    return (
        <StyledButton
            onPress={() => props.setLoginState(checkLogin(props.username, props.password))}
        >
            <StyledButtonText>{props.children}</StyledButtonText>
        </StyledButton>
    );
};

export default LoginButton;