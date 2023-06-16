import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';

interface ItemProps {
  text: string;
}

export const Item = ({ text }: ItemProps) => {
  return (
    <>
      <Text>- {text}</Text>
    </>
  );
};

const Text = styled(RNText)`
  font-size: 16px;
`;