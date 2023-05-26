import { TextInput as RNTextInput } from 'react-native';
import { useState } from 'react';

export const Input = () => {
  const [text, setText] = useState('');

  return <RNTextInput value={text} onChangeText={setText} />;
};
