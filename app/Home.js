import React, {useEffect} from 'react';
import { Text } from 'react-native';
import { Link, router } from 'expo-router';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <Text>Home</Text>
      <Link href="/P46_1">P46_1 암기하기</Link>
      <Link href="/P47_1">P47_1 문제1번 풀기</Link>
      <Link href="/P51_1">P51_1 문제3번 풀기</Link>
      <Link href="/P52_1">P52_1 일기 작성하기</Link>
    </Container>
  );
}
export default Home;
