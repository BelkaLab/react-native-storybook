import { Button } from './button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {}
};

export const Template = ({ args }) => {
  return <Button {...args} />;
};
