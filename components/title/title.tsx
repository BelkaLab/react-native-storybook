import { StyleProp, Text as RNText, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import { TextOrientation } from './types';

interface TitleProps {
  text: string;
  orientation: TextOrientation;
  style?: StyleProp<TextStyle>;
}

export const Title = ({ text, orientation, style }: TitleProps): JSX.Element => {
  return (
    <Text orientation={orientation} style={style}>
      {text}
    </Text>
  );
};

const Text = styled(RNText)<{ orientation: TextOrientation }>`
  font-size: 20px;
  font-weight: 500;
  text-align: ${(props) => props.orientation};
`;
