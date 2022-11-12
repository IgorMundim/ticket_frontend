import { Meta, Story } from '@storybook/react/types-6-0';
import { DescriptionEvent, DescriptionEventProps } from '.';

export default {
  title: 'DescriptionEvent',
  component: DescriptionEvent,
  args: {
    description:
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>",
  },
} as Meta;

export const Template: Story<DescriptionEventProps> = (args) => {
  return <DescriptionEvent {...args} />;
};
