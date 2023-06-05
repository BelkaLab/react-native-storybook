import { StyleSheet, Text, TextInput as RNTextInput } from 'react-native';
import { useState } from 'react';

interface InputProps {
  placeholder: string;
  label?: string;
}

export const Input = ({ placeholder, label }: InputProps): JSX.Element => {
  const [text, setText] = useState('');

  return (
    <>
      {label && <Text>{label}</Text>}
      <RNTextInput value={text} onChangeText={setText} placeholder={placeholder} />
    </>
  );
};
