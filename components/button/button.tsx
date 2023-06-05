import React, { useCallback } from 'react';
import {
  PressableStateCallbackType,
  Pressable as RNPressable,
  Text as RNText,
  StyleProp,
  ViewStyle
} from 'react-native';
import styled from 'styled-components/native';
import { retrieveButtonColor } from './utils';
import { ButtonVariant } from './types';

interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Button = ({ text, variant, disabled, style, onPress }: ButtonProps): JSX.Element => {
  const { backgroundColor, textColor } = retrieveButtonColor(variant);
  const _style = useCallback(
    ({ pressed }: PressableStateCallbackType) => [{ opacity: pressed || disabled ? 0.5 : 1 }, style && style],
    [style, disabled]
  );

  return (
    <Pressable backgroundColor={backgroundColor} disabled={disabled} style={_style} onPress={onPress}>
      <Text textColor={textColor} disabled={disabled}>
        {text}
      </Text>
    </Pressable>
  );
};

const Pressable = styled(RNPressable)<{ backgroundColor: string }>`
  justify-content: center;
  align-items: center;
  height: 46px;
  padding-horizontal: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
`;

const Text = styled(RNText)<{ textColor: string }>`
  color: ${(props) => props.textColor};
  font-size: 18px;
`;
