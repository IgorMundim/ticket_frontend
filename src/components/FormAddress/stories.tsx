import { FormAddress, FormAddressProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'FormAddress',
  component: FormAddress,
  args: {
    isVisible: true,
    address: {
      telephone: 'Fone',
      zipcode: 'Zipcode',
      complement: 'Complement',
      city: 'City',
      neighborhood: 'Neighborhood',
      number: 'number',
      street: 'Street',
      uf: 'UF',
    },
  },
} as Meta;

export const Template: Story<FormAddressProps> = (args) => {
  return <FormAddress {...args} />;
};
