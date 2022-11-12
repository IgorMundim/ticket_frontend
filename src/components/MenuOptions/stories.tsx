import { Meta, Story } from '@storybook/react/types-6-0';
import { MenuOptions, MenuOptionsProps } from '.';
import { theme } from '../../styles/theme';

export default {
  title: 'MenuOptions',
  component: MenuOptions,
  args: {
    text: 'text',
    isActive: true,
  },
} as Meta;

export const Template: Story<MenuOptionsProps> = (args) => {
  return (
    <div
      style={{
        maxWidth: '320px',
        background: theme.colors.primary,
        padding: theme.spacings.large,
      }}
    >
      <MenuOptions {...args} />
      <MenuOptions {...args} />
      <MenuOptions {...args} />
      <MenuOptions {...args} />
    </div>
  );
};
