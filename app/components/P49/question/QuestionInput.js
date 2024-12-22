// src/components/page49/question/QuestionInput.js

import React from "react";
import styled from "styled-components/native";

const StyledQuestionInput = styled.TextInput`
    width: 150px;
    height: 25px;
    padding: 1px;

    border: 1px solid transparent;
    border-bottom-color: #000;

    font-size: 14px;
    text-align: center;
    color: ${(props) => props.color};

    margin-left: 6px;
`;

const QuestionInput = (props) => {
    return (
        <StyledQuestionInput
            color={props.color}
            onChangeText={(value) => props.setValue(value)}
        >
        </StyledQuestionInput>
    )
}

export default QuestionInput;