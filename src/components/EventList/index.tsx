import { SectionContainer } from 'components/SectionContainer';
import { EventItem, EventItemProp } from '../EventItem';
import * as Styled from './styles';
export type EventListProp = {
  events: EventItemProp[];
};
export const EventList = ({ events }: EventListProp) => {
  return (
    <SectionContainer>
      <Styled.Container>
        {events.map((event) => (
          <EventItem key={event.name} {...event} />
        ))}
      </Styled.Container>
    </SectionContainer>
  );
};
