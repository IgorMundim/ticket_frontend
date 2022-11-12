import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';
const footer = {
  footerHtml: '<h1>Hello<h1>',
  src_img: 'http://127.0.0.1:8000/media/footer/2022/11/10/banner/logo.png',
  alt_text: 'text',
};

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer footer={footer} />);
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument();
  });
});
