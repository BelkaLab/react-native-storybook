import { Title } from './title';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { TEXT_ORIENTATION } from './types';

export default {
  title: 'Title',
  component: Title,
  args: {
    text: 'This is a title',
    orientation: 'left'
  },
  argTypes: {
    orientation: {
      control: {
        type: 'radio'
      },
      options: TEXT_ORIENTATION
    }
  }
} as ComponentMeta<typeof Title>;

export const Template: ComponentStory<typeof Title> = (args) => {
  return <Title {...args} />;
};
