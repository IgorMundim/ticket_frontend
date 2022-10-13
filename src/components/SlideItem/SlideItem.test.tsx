import { screen } from '@testing-library/react';
import { SlideItem } from '.';
import { renderTheme } from '../../styles/render-theme';
describe('<SlideItem />', () => {
  it('should render slide item', () => {
    const { container } = renderTheme(
      <SlideItem
        src="img.jpg"
        title="What is Lorem Ipsum"
        description="There is no one who loves pain itself"
        alt="text"
        link="https://www.google.com/"
      />,
    );
    expect(
      screen.getAllByRole('heading', {
        name: 'What is Lorem Ipsum',
      }),
    );

    expect(container).toMatchSnapshot();
  });
});
