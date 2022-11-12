import { MenuLinkProps } from '../../components/MenuLink';
import { Base } from '../Base';
import { LogoLinkProps } from '../../components/LogoLink';
import { Banner, SlideProps } from '../../components/Banner';
import { CategoryProps, Category } from '../../components/Category';
import { EventList } from '../../components/EventList';
import { EventItemProp } from '../../components/EventItem';
import { FooterProps } from 'components/Footer';

type BaseHomeProps = {
  title: string;
  slug: string;
  banners: SlideProps[];
  menuLink: MenuLinkProps[];
  logoLink: LogoLinkProps;
  footer: FooterProps;
};

export type HomeProps = {
  home: BaseHomeProps;
  categories: CategoryProps[];
  events: EventItemProp[];
};

function Home({ home, categories, events }: HomeProps) {
  const { banners, menuLink, logoLink, footer } = home;
  const { text, link, srcImg } = logoLink;

  return (
    <>
      <Base links={menuLink} footer={footer} logoData={{ text, link, srcImg }}>
        <Banner banners={banners} />
        <Category categories={categories}></Category>

        <EventList events={events} />
      </Base>
    </>
  );
}

export default Home;
