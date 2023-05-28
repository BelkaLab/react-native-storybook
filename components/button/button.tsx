import React from 'react';
import { Pressable as RNPressable, Text as RNText } from 'react-native';
import styled from 'styled-components/native';
import { retrieveButtonColor } from './utils';
import { ButtonVariant } from './types';

interface ButtonProps {
  variant: ButtonVariant;
  onPress?: () => void;
}

export const Button = ({ variant, onPress }: ButtonProps): JSX.Element => {
  const { backgroundColor, textColor } = retrieveButtonColor(variant);
  return (
    <Pressable
      backgroundColor={backgroundColor}
      onPress={onPress}
    >
      <Text textColor={textColor}>button</Text>
    </Pressable>
  );
};

const Pressable = styled(RNPressable) <{ backgroundColor: string }>`
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${props => props.backgroundColor};
`;

const Text = styled(RNText) <{ textColor: string }>`
  color: ${props => props.textColor};
  font-size: 18px;
`;