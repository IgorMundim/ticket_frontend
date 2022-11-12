import { BannerEvent } from 'components/BannerEvent';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';
import { EventTop } from '../../components/EventTop';
import { Base } from '../Base';
import { SectionContainer } from 'components/SectionContainer';
import { DescriptionEvent } from 'components/DescriptionEvent';
import { FooterProps } from 'components/Footer';

export const Event = ({ base, event }: EventPageProps) => {
  const { menuLink, logoLink, footer } = base;
  const { text, link, srcImg } = logoLink;

  return (
    <>
      <Base links={menuLink} footer={footer} logoData={{ text, link, srcImg }}>
        <BannerEvent
          alt_text={event.image.alt_text}
          image_url={event.image.image_url}
        />
        <SectionContainer>
          <EventTop
            address={event.address.street}
            date_start={event.date_start}
            title={event.name}
          />
        </SectionContainer>
        {/* <VideoDescription video_url={event.video_url} /> */}
        <SectionContainer>
          <DescriptionEvent description={event.description} />
        </SectionContainer>
      </Base>
    </>
  );
};

type BaseProps = {
  title: string;
  slug: string;
  menuLink: MenuLinkProps[];
  logoLink: LogoLinkProps;
  footer: FooterProps;
};
type AddressProps = {
  zipcode: string;
  complement: string;
  city: string;
  neighborhood: string;
  number: string;
  street: string;
  uf: string;
};
type ImageProps = {
  image_url: string;
  alt_text: string;
};

type CategoriesProps = {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  alt_text: string;
  url: string;
  url_events: string;
};
type EventProps = {
  id: number;
  name: string;
  in_room: string;
  date_end: string;
  date_start: string;
  description: string;
  is_virtual: string;
  video_url: string;
  is_published: string;
  address: AddressProps;
  image: ImageProps;
  categories: CategoriesProps;
};
export type EventPageProps = {
  base: BaseProps;
  event: EventProps;
};
