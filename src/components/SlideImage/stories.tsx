import { Meta, Story } from '@storybook/react/types-6-0';
import { SlideImage, SlideImageProps } from '.';

export default {
  title: 'SlideImage',
  component: SlideImage,
  args: {
    src: 'https://www.heteroclito.fr/modules/Jssor/img/home/02.jpg',
    alt: 'Text',
  },
} as Meta;

export const Template: Story<SlideImageProps> = (args) => {
  return <SlideImage {...args} />;
};
