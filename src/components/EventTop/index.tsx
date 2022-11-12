import * as Styled from './styles';
import { CalendarTodo } from '@styled-icons/remix-line/CalendarTodo';
import { Location } from '@styled-icons/ionicons-outline/Location';
import { Heading } from '../Heading';
import { Paragraph } from 'components/Paragraph';

import Link from 'next/link';

export type EventTopProps = {
  title: string;
  address: string;
  date_start: string;
};
export const EventTop = ({ title, address, date_start }: EventTopProps) => {
  const date = new Date(date_start);
  const minute = String(date.getMinutes()).padStart(2, '0');
  const hour = date.toLocaleString('pt-BR', { hour: 'numeric' });
  const dateEvent = date.toLocaleString('pt-BR', { dateStyle: 'full' });
  date_start = `${dateEvent} ${hour}:${minute}`;

  return (
    <Styled.Container>
      <Styled.Description>
        <Heading as="h2" size="large">
          {title}
        </Heading>
        <Styled.Date>
          <CalendarTodo />
          <Paragraph size="normal">{date_start}</Paragraph>
        </Styled.Date>
        <Styled.Address>
          <Location />
          <Paragraph size="normal">{address}</Paragraph>
        </Styled.Address>
      </Styled.Description>
      <div>
        <Link href="/event/subscription">
          <Styled.Button>Fazer inscrição</Styled.Button>
        </Link>
      </div>
    </Styled.Container>
  );
};
