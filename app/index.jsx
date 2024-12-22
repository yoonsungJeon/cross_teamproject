// src/components/intro/Intro.js

import React, { useState, useEffect } from "react";
import { router } from "expo-router";
import styled from "styled-components/native";
import Title from "./components/intro/title/Title";
import SubTitle from "./components/intro/title/SubTitle";
import LoginBox from "./components/intro/login/LoginBox";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Intro = (props) => {
  const [loginState, setLoginState] = useState(false);
  const [first, setFirst] = useState(true);

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }

    if (loginState) router.replace("/Home");
  }, [loginState]);

  return (
    <Container>
      <Title subtitle="6팀">크로스 앱 프로그래밍</Title>
      <SubTitle>식단 조절 및 기억하기</SubTitle>
      <LoginBox
        setUserName={setUserName}
        setPassWord={setPassWord}
        username={userName}
        password={passWord}
        setLoginState={setLoginState}
      />
    </Container>
  );
};

export default Intro;
