import { FormCustomer, FormCustomerProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'FormCustomer',
  component: FormCustomer,
  args: {
    isVisible: true,
    customer: { first_name: 'First Name', last_name: 'Last Name', cpf: 'CPF' },
  },
} as Meta;

export const Template: Story<FormCustomerProps> = (args) => {
  return <FormCustomer {...args} />;
};
