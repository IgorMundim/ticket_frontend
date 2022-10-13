import { renderTheme } from '../../styles/render-theme';
import { SlideImage } from '.';
import { screen } from '@testing-library/react';

describe('<SlideImage', () => {
  it.only('should render image default', () => {
    renderTheme(<SlideImage src="image.jpg" alt="text" />);
    expect(screen.getByAltText('text')).toHaveAttribute('src', 'image.jpg');
  });
});
