// src/components/intro/login/loginBox.js

import React from "react";
import styled from "styled-components/native";
import InputBox from "./InputBox";
import LoginButton from "./LoginButton";

const StyledLoginBox = styled.View`
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;

    width: 200px;
    height: 150px;

    margin-top: 30px;
`;

const LoginBox = (props) => {
    console.log(props)
    return (
        <StyledLoginBox>
            <InputBox text="아이디" setFunc={props.setUserName} />
            <InputBox text="비밀번호" setFunc={props.setPassWord} />
            <LoginButton username={props.username} password={props.password} setLoginState={props.setLoginState}>로그인</LoginButton>
        </StyledLoginBox>
    );
};

export default LoginBox;