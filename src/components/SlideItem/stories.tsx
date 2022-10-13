import { Meta, Story } from '@storybook/react/types-6-0';
import { SlideItem, SlideItemProps } from '.';

export default {
  title: 'SlideItem',
  component: SlideItem,
  args: {
    src: 'https://www.heteroclito.fr/modules/Jssor/img/home/02.jpg',
    title: 'What is Lorem Ipsum',
    description: 'There is no one who loves pain itself',
    alt: 'text',
    link: 'https://www.google.com/',
  },
} as Meta;

export const Template: Story<SlideItemProps> = (args) => {
  return <SlideItem {...args} />;
};
