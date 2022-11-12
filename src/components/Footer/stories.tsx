import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer, FooterBaseProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footer: {
      footerHtml: '<p><a href="https://google.com">My footer</a></p>',
      src_img: 'http://127.0.0.1:8000/media/footer/2022/11/10/banner/logo.png',
      alt_text: 'text',
    },
  },
} as Meta;

export const Template: Story<FooterBaseProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
