import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink text={'text'} link="http://localhost"></MenuLink>);
    expect(screen.getByRole('link', { name: 'text' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  it('should render a internal link', () => {
    renderTheme(<MenuLink text={'text'} link="/localhost"></MenuLink>);
    expect(screen.getByRole('link', { name: 'text' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink text={'text'} link="http://localhost" newTab={true}></MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'text' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink text={'text'} link="http://localhost" newTab={true}></MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'text' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });
});
