// src/components/Page49.js

import React from "react";
import styled from "styled-components/native";
import { router } from "expo-router";
import Title from "./components/intro/title/Title";
import QuestionBox from "./components/P49/question/QuestionBox";
import GoButton from "./components/home/GoButton";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const MoveContainer = styled.View`
  margin-top: 10px;
  flexdirection: row;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: #007bff;
  width: 70px;
  height: 20px;
  border: 1px solid #fff;
  margin-top: 10px;
`;

const StyledButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

const _onPress = () => {
  //router.replace("/P50")
};

const MoveButton = (props) => {
  return (
    <StyledButton onPress={_onPress()}>
      <StyledButtonText>{props.children}</StyledButtonText>
    </StyledButton>
  );
};

const Page49 = (props) => {
  return (
    <Container>
      <Title>
        앞서 기억해 둔 당뇨 예방 밥상 음식의 이름을 해당하는 자리에 적어 보세요.
      </Title>
      <QuestionBox questionNum={1} answer="시금치 무침"></QuestionBox>
      <QuestionBox questionNum={2} answer="호박전"></QuestionBox>
      <QuestionBox questionNum={3} answer="고등어 구이"></QuestionBox>
      <QuestionBox questionNum={4} answer="연어 샐러드"></QuestionBox>
      <QuestionBox questionNum={5} answer="현미밥"></QuestionBox>
      <QuestionBox questionNum={6} answer="시금치 된장국"></QuestionBox>
      <MoveContainer>
        <MoveButton>완료</MoveButton>
        <GoButton page="/Home">홈으로 이동</GoButton>
      </MoveContainer>
    </Container>
  );
};

export default Page49;
