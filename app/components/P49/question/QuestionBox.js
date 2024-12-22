// src/components/page49/question/QuestionBox.js

import React, {useState, useEffect} from "react";
import styled from "styled-components/native";
import QuestionTitle from "./QuestionTitle";
import QuestionInput from "./QuestionInput";

const StyledQuestionBox = styled.View`
    background-color: #FFF;
    align-items: center;
    justify-content: center;

    width: 250px;
    height: 30px;

    margin-top: 15px;

    flexDirection: row;
`;

const QuestionBox = (props) => {
    const [ value, setValue ] = useState("");
    const [ inputColor, setInputColor ] = useState("black");

    useEffect(() => {
        if (value === "") setInputColor("black");
        else if (props.answer === value) setInputColor("green");
        else setInputColor("black");
    }, [value])


    return (
        <StyledQuestionBox>
            <QuestionTitle num={props.questionNum}></QuestionTitle>
            <QuestionInput setValue={setValue} color={inputColor}></QuestionInput>
        </StyledQuestionBox>
    )
}

export default QuestionBox;