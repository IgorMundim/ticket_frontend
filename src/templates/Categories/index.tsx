import { BannerCategory } from 'components/BannerCategory';
import { EventItemProp } from 'components/EventItem';
import { EventList } from 'components/EventList';
import { FooterProps } from 'components/Footer';
import { CategoryProps } from '../../components/Category';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';
import { Base } from '../Base';
type BaseProps = {
  title: string;
  slug: string;
  menuLink: MenuLinkProps[];
  logoLink: LogoLinkProps;
  footer: FooterProps;
};
export type CategoryPageProps = {
  base: BaseProps;
  category: CategoryProps;
  events: EventItemProp[];
};

export const Categories = ({ category, base, events }: CategoryPageProps) => {
  const { menuLink, logoLink, footer } = base;
  const { text, link, srcImg } = logoLink;
  return (
    <>
      <Base links={menuLink} footer={footer} logoData={{ text, link, srcImg }}>
        <BannerCategory
          image_url={category.image_url}
          alt={category.alt}
          name={category.name}
        />
        <EventList events={events} />
      </Base>
    </>
  );
};
