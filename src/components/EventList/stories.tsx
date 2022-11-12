import { Meta, Story } from '@storybook/react/types-6-0';
import { EventList, EventListProp } from '.';
import events from './mock';

export default {
  title: 'EventList',
  component: EventList,
  args: {
    events: events,
  },
} as Meta;

export const Templete: Story<EventListProp> = (args) => {
  return <EventList {...args} />;
};
