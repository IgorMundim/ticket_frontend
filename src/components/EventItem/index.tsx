import { Heading } from '../Heading';
import Link from 'next/link';
import * as Styled from './styles';
import { Paragraph } from 'components/Paragraph';
export type AddressProp = {
  city: string;
  uf: string;
};
export type ImageProp = {
  image_url: string;
  alt_text: string;
};
export type EventItemProp = {
  id?: string;
  image: ImageProp;
  name: string;
  address: AddressProp;
  date_end: string;
};

export const EventItem = ({
  id,
  image,
  name,
  address,
  date_end,
}: EventItemProp) => {
  const date = new Date(date_end);
  const day = date.toLocaleString('default', { day: 'numeric' });
  const month = date.toLocaleString('pt-BR', { month: 'short' }).toUpperCase();

  return (
    <Styled.Container>
      <Link href={'/event/' + id}>
        <Styled.Image src={image.image_url} alt={image.alt_text}></Styled.Image>
      </Link>

      <Styled.Detail>
        <Styled.Date>
          <Paragraph size="small">{month.slice(0, 3)}</Paragraph>
          <Paragraph size="small">{day}</Paragraph>
        </Styled.Date>
        <Styled.Description>
          <Heading as="h3" colorDark={true} size="small">
            {name}
          </Heading>
          <Paragraph size="small">
            {address.city} - {address.uf}
          </Paragraph>
        </Styled.Description>
      </Styled.Detail>
    </Styled.Container>
  );
};
