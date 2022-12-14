import { Meta, Story } from '@storybook/react/types-6-0';
import { TextInput, TextInputProps } from '.';
import { AlternateEmail } from '@styled-icons/material-outlined/AlternateEmail';

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    label: 'Teste label',
    name: 'input-name',
    type: 'text',
    disabled: false,
    errorMessage: '',
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '3.2rem' }}>
          <Story />
        </div>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Templete: Story<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />
    </div>
  );
};

export const OnError: Story<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />{' '}
    </div>
  );
};

OnError.args = {
  errorMessage: 'Something went wrog, Sorry!',
  value: 'Something you typed',
  icon: <AlternateEmail />,
};

export const WithText: Story<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />
    </div>
  );
};

WithText.args = {
  value: 'Something you typed',
};

export const WithIcon: Story<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />
    </div>
  );
};

WithIcon.args = {
  value: 'Something you typed',
  icon: <AlternateEmail />,
};

export const Disabled: Story<TextInputProps> = (args) => {
  return (
    <div>
      <TextInput {...args} />
    </div>
  );
};

Disabled.args = {
  value: 'Something you typed',
  icon: <AlternateEmail />,
  disabled: true,
};
