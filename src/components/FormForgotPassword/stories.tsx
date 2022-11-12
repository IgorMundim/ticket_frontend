import { Meta, Story } from '@storybook/react/types-6-0';
import { FormForgotPassword, FormForgotPasswordProps } from '.';

export default {
  title: 'FormForgotPassword',
  component: FormForgotPassword,
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
} as Meta<FormForgotPasswordProps>;

export const Template: Story<FormForgotPasswordProps> = (args) => {
  return <FormForgotPassword {...args} />;
};

export const WithError: Story<FormForgotPasswordProps> = (args) => {
  return <FormForgotPassword {...args} />;
};

WithError.args = {
  errorMessage: 'Este é seu erro',
};
