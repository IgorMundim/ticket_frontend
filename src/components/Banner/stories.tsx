import { Meta, Story } from '@storybook/react/types-6-0';
import { Banner, BannerProps } from '.';
import slides from './mock';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    banners: slides,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Template: Story<BannerProps> = (args) => {
  return <Banner {...args} />;
};
