import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Title } from '../components/title';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { SafeAreaView } from 'react-native';
import { Item } from '../components/item';

const Home = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const [toDos, setToDos] = useState<Array<string>>([]);

  const onButtonPress = () => {
    setToDos([...toDos, inputValue]);
    setInputValue('');
  };

  const onResetPress = () => {
    setToDos([]);
  };

  return (
    <Container>
      <StyledTitle text={'To do app'} orientation={'center'} />
      <StyledInput placeholder={'Your todo'} value={inputValue} onChangeText={setInputValue} />
      <StyledButton text={'Enter'} variant={'primary'} onPress={onButtonPress} disabled={!inputValue} />
      {/*TODO: move reset button at the end of the list or page*/}
      <StyledButton text={'Reset'} variant={'text'} onPress={onResetPress} disabled={toDos.length === 0} />
      <ScrollView>
        {toDos.map((elem, index) => (
          <Item key={index} text={elem} />
        ))}
      </ScrollView>
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
  margin: 16px;
`;

const StyledTitle = styled(Title)`
  margin-top: 32px;
`;

const StyledInput = styled(Input)`
  margin-top: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 16px;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
`;

export default Home;
