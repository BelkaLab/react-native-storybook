import { Text as RNText } from 'react-native';
import styled from 'styled-components/native';
import { TextOrientation } from './types';

interface TitleProps {
  text: string;
  orientation: TextOrientation;
}

export const Title = ({ text, orientation }: TitleProps): JSX.Element => {
  return <Text orientation={orientation}>{text}</Text>;
};

const Text = styled(RNText)<{ orientation: TextOrientation }>`
  font-size: 20px;
  font-weight: 500;
  text-align: ${(props) => props.orientation};
`;
