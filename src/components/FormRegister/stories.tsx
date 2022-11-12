import { Meta, Story } from '@storybook/react/types-6-0';
import { FormRegister, FormRegisterProps } from '.';

export default {
  title: 'FormRegister',
  component: FormRegister,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '4rem' }}>
          <Story />
        </div>
      );
    },
  ],
} as Meta<FormRegisterProps>;

export const Template: Story<FormRegisterProps> = (args) => {
  return <FormRegister {...args} />;
};
