import React from 'react';
import styled from 'styled-components/native';
import { Title } from '../components/title';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { SafeAreaView } from 'react-native';

const Home = (): JSX.Element => {
  return (
    <Container>
      <Title text={'To do app'} orientation={'center'} />
      <Input placeholder={'Your todo'} />
      <Button text={'Enter'} variant={'primary'} />
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
`;

export default Home;
