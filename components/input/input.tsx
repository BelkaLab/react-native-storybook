import { Text, TextInput as RNTextInput } from 'react-native';
import { useState } from 'react';
import styled from 'styled-components/native';

interface InputProps {
  placeholder: string;
  label?: string;
}

export const Input = ({ placeholder, label }: InputProps): JSX.Element => {
  const [text, setText] = useState('');

  return (
    <>
      {label && <Label>{label}</Label>}
      <TextInput value={text} onChangeText={setText} placeholder={placeholder} />
    </>
  );
};

const TextInput = styled(RNTextInput)`
  padding: 12px;
  border: 1px solid #0050e6;
  border-radius: 10px;
`;

const Label = styled(Text)`
  margin-bottom: 4px;
  margin-left: 2px;
`;
