import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { Paragraph } from '.';

import { renderTheme } from '../../styles/render-theme';

describe('<Paragraph />', () => {
  it('should render with default values', () => {
    renderTheme(<Paragraph>text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.font.sizes.medium,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Paragraph colorDark={false}>text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render paragraph with size xxsmall', () => {
    renderTheme(<Paragraph size="xxsmall">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.xxsmall,
    });
  });

  it('should render paragraph with size xsmall', () => {
    renderTheme(<Paragraph size="xsmall">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.xsmall,
    });
  });
  it('should render paragraph with size small', () => {
    renderTheme(<Paragraph size="small">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.small,
    });
  });
  it('should render paragraph with size normal', () => {
    renderTheme(<Paragraph size="normal">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.normal,
    });
  });
  it('should render paragraph with size medium', () => {
    renderTheme(<Paragraph size="medium">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });
  it('should render paragraph with size large', () => {
    renderTheme(<Paragraph size="large">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });
  it('should render paragraph with size xlarge', () => {
    renderTheme(<Paragraph size="xlarge">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
  });
  it('should render paragraph with size xxlarge', () => {
    renderTheme(<Paragraph size="xxlarge">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.xxlarge,
    });
  });
  it('should render paragraph with size huge', () => {
    renderTheme(<Paragraph size="huge">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.huge,
    });
  });
  it('should render paragraph with size xhuge', () => {
    renderTheme(<Paragraph size="xhuge">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });
  it('should render paragraph with size xxhuge', () => {
    renderTheme(<Paragraph size="xxhuge">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.xxhuge,
    });
  });
  it('should render paragraph with size ', () => {
    renderTheme(<Paragraph size="hero">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.hero,
    });
  });
  it('should render paragraph with size ', () => {
    renderTheme(<Paragraph size="xhero">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.xhero,
    });
  });
  it('should render paragraph with size xxhero', () => {
    renderTheme(<Paragraph size="xxhero">text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.xxhero,
    });
  });
  it('should render with uppercase', () => {
    renderTheme(<Paragraph uppercase={true}>text</Paragraph>);
    const paragraph = screen.getByText('text');
    expect(paragraph).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });
});
