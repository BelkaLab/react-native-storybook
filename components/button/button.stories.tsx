import React from 'react';
import { Button } from './button';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { BUTTON_VARIANTS } from './types';

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'Button',
    variant: 'primary',
    disabled: false,
    onPress: () => console.log('pressed')
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio'
      },
      options: BUTTON_VARIANTS
    }
  }
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text'
};