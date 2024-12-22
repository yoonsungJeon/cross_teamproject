// src/components/intro/login/InputBox.js

import React from "react";
import styled from "styled-components/native";

const StyledBox = styled.View`
    flex-direction: row;
`;

const StyledText = styled.Text`
    color: #000;
    font-size: 14px;
    font-weight: 400;
    width: 50px;
    text-align: left;

    margin-top: 10px;
`;

const StyledInput = styled.TextInput.attrs(props => ({
    placeholder: props.placeholder
}))`
    width: 100px;
    height: 20px;
    padding: 10px;
    border: 2px solid #000;
    font-size: 14px;

    margin-top: 10px;
    margin-left: 10px;

    text-align: center;

    color: #000;
`

const InputBox = (props) => {
    return (
        <StyledBox>
            <StyledText>{props.text}</StyledText>
            <StyledInput
                placeholder={props.text}
                onChangeText={(value) => props.setFunc(value)}
                secureTextEntry={props.text === "비밀번호" ? true : false}>
            </StyledInput>
        </StyledBox>
    );
};

export default InputBox;