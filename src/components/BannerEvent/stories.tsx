import { Meta, Story } from '@storybook/react/types-6-0';
import { BannerEvent, BannerEventProps } from '.';
export default {
  title: 'BannerEvent',
  component: BannerEvent,
  args: {
    image_url:
      'https://bigeventasia.id/wp-content/uploads/2019/11/event-concert.jpg?x81295',
    alt_text: 'banner category',
  },
} as Meta;

export const Templete: Story<BannerEventProps> = (args) => {
  return <BannerEvent {...args} />;
};
