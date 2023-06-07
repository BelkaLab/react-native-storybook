import { Item } from './item';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

export default {
  title: 'Item',
  component: Item
} as ComponentMeta<typeof Item>;

export const Template: ComponentStory<typeof Item> = (args) => {
  return <Item {...args} />;
};
