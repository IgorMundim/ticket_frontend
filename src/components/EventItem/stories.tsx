import { Meta, Story } from '@storybook/react/types-6-0';
import { EventItem, EventItemProp } from '.';

export default {
  title: 'EventItem',
  conponent: EventItem,
  args: {
    image_url: '/media/covers/2022/11/05/wine1.jpg',
    alt_text: 'Text',
    name: 'There is no one who loves pain itself',
    date_end: '2022-11-30T19:41:02-03:00',
    address: {
      city: 'Imperatriz',
      uf: 'MG',
    },
    image: {
      image_url: '/media/covers/2022/11/05/wine1.jpg',
      alt_text: 'show',
    },
    month: 'Nov',
    day: '16',
  },
} as Meta;

export const Templete: Story<EventItemProp> = (args) => {
  return <EventItem {...args} />;
};
