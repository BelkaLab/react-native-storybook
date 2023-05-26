import { Input } from './input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {}
};

export const Default = {
  args: {
    placeholder: 'Placeholder'
  }
};

export const WithLabel = {
  args: {
    placeholder: 'Placeholder',
    label: 'Input label'
  }
};
