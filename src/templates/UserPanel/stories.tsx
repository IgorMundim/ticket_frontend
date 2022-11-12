import { Meta, Story } from '@storybook/react/types-6-0';
import { UserPanel, UserPanelProps } from '.';
import { mockBase } from '../Base/mock';
export default {
  title: 'UserPanel',
  component: UserPanel,
  args: {
    customer: {
      first_name: 'First Name',
      last_name: 'Last Name',
      cpf: 'CPF',
    },
    addressData: {
      telephone: 'Fone',
      zipcode: 'Zipcode',
      complement: 'Complement',
      city: 'City',
      neighborhood: 'Neighborhood',
      number: 'number',
      street: 'Street',
      uf: 'UF',
    },
    base: mockBase,
  },
} as Meta;

export const Templete: Story<UserPanelProps> = (args) => {
  return (
    <div>
      <UserPanel {...args} />
    </div>
  );
};
