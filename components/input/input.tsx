import { Text, TextInput as RNTextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  placeholder: string;
  label?: string;
  value?: string;
  onChangeText?: (value: string) => void;
}

export const Input = ({ placeholder, label, value, onChangeText }: InputProps): JSX.Element => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} />
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
