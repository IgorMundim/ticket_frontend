import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer, FooterBaseProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footer: {
      footerHtml:
        '<p><a href="https://google.com">My footer aaaaaaaaa aaaa aaa</a></p>',
      src_img:
        'https://ticket-backend.s3.amazonaws.com/static/footer/2022/11/12/banner/logo.png',
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
