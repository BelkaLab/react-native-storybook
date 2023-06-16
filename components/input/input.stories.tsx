import { Input } from './input';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

export default {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Placeholder'
  },
  argTypes: {
    placeholder: {
      type: 'string'
    },
    label: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Input>;

export const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const WithLabel = {
  args: {
    placeholder: 'Placeholder',
    label: 'Input label'
  }
};
