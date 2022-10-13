import { Meta, Story } from '@storybook/react/types-6-0';
import { IconButton, IconButtonProps } from '.';

export default {
  title: 'IconButton',
  component: IconButton,
  args: {
    icon: 'chevromRight',
    size: 'medium',
    darkColor: false,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Light: Story<IconButtonProps> = (args) => {
  return <IconButton {...args} />;
};
export const Dark: Story<IconButtonProps> = (args) => {
  return <IconButton {...args} />;
};

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  colorDark: false,
};
