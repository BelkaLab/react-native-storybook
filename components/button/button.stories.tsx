import React from 'react';
import { Button } from './button';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

export default {
  title: 'Button',
  component: Button,
  args: {
    variant: 'primary'
  },
  argTypes: {},
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}></Button>;
};