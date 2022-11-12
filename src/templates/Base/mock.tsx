import { BaseProps } from '.';
import linksMock from '../../components/NavLinks/mock';

export const mockBase = {
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footer: {
    footerHtml: '<p><a href="https://google.com">My footer</a></p>',
    src_img: 'http://127.0.0.1:8000/media/footer/2022/11/10/banner/logo.png',
    alt_text: 'text',
  },
} as BaseProps;
