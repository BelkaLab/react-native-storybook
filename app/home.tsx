import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Title } from '../components/title';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { SafeAreaView, Text } from 'react-native';

const Home = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState<Array<string>>([]);

  const onButtonPress = () => {
    setToDos([...toDos, inputValue]);
    setInputValue('');
  };

  return (
    <Container>
      <Title text={'To do app'} orientation={'center'} />
      <Input placeholder={'Your todo'} value={inputValue} onChangeText={setInputValue} />
      <Button text={'Enter'} variant={'primary'} onPress={onButtonPress} disabled={!inputValue} />
      {toDos.map((elem) => (
        <Text>{elem}</Text>
      ))}
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
`;

export default Home;
