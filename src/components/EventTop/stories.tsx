import { Meta, Story } from '@storybook/react/types-6-0';
import { EventTop, EventTopProps } from '.';

export default {
  title: 'EventTop',
  component: EventTop,
  args: {
    title: '1914 ', //translation by H. Rackham
    address: 'John F. Kennedy Blvd',
    date_start: '2022-11-30T19:41:02-03:00',
  },
} as Meta;

export const Template: Story<EventTopProps> = (args) => {
  return <EventTop {...args} />;
};
