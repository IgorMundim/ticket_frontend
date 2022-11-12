import { Meta, Story } from '@storybook/react/types-6-0';
import { UserMenu } from '.';

export default {
  title: 'UserMenu',
  component: UserMenu,
  args: {},
} as Meta;

export const Template: Story = (args) => {
  return <UserMenu {...args} />;
};
