import { Meta, Story } from '@storybook/react/types-6-0';
import { Banner, BannerProps } from '.';
import slides from './mock';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    slides: slides,
  },
} as Meta;

export const Template: Story<BannerProps> = (args) => {
  return <Banner {...args} />;
};
