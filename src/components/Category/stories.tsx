import { Category, CategoryProps } from '.';
import categoryMock from './mock';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Category',
  component: Category,
  args: {
    categories: categoryMock,
  },
} as Meta;

export const Tamplate: Story<CategoryProps> = (args) => {
  return <Category {...args}></Category>;
};
