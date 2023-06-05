import React from 'react';
import { Button } from './button';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { BUTTON_VARIANT } from './types';

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'Button',
    variant: 'primary',
    disabled: true,
    onPress: () => console.log('pressed')
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio'
      },
      options: BUTTON_VARIANT
    }
  }
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};
