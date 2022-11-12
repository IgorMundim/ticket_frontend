import { Meta, Story } from '@storybook/react/types-6-0';
import { BannerCategory, BannerCategoryProps } from '.';
export default {
  title: 'BannerCategory',
  component: BannerCategory,
  args: {
    image_url:
      'https://bigeventasia.id/wp-content/uploads/2019/11/event-concert.jpg?x81295',
    alt: 'banner category',
    name: 'My category',
  },
} as Meta;

export const Templete: Story<BannerCategoryProps> = (args) => {
  return <BannerCategory {...args} />;
};
