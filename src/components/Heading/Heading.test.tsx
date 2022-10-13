import { renderTheme } from '../../styles/render-theme';
import { Heading } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.font.sizes.huge,
      'text-transform': 'none',
    });
  });
  it('should render with color white', () => {
    renderTheme(<Heading colorDark={false}>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });
  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.small,
    });
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.huge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">text</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">text</Heading>);
    screen.getByRole('heading', { name: 'text' });
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
