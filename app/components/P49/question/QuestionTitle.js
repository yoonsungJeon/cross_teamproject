// src/components/page49/question/QuestionTitle.js

import React from "react";
import styled from "styled-components/native";

const StyledQuestionTitle = styled.Text`
    color: #000;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
`;

const QuestionTitle = (props) => {
    return (
        <StyledQuestionTitle>{props.num}. 음식 : </StyledQuestionTitle>
    )
}

export default QuestionTitle;