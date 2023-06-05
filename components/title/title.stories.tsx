import { Title } from './title';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

export default {
  title: 'Title',
  component: Title
} as ComponentMeta<typeof Title>;

export const Template: ComponentStory<typeof Title> = (args) => {
  return <Title {...args} />;
};
