import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';
import EmptyCheckBox from '../../icons/EmptyCheckBox';
import CheckBox from '../../icons/CheckBox';

interface ItemProps {
  text: string;
}

export const Item = ({ text }: ItemProps) => {
  return (
    <>
      <EmptyCheckBox />
      <CheckBox />
      <Text>{text}</Text>
    </>
  );
};

const Text = styled(RNText)`
  font-size: 16px;
`;
