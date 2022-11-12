import * as Styled from './styles';
import { ChevronLeft } from '@styled-icons/boxicons-solid/ChevronLeft';
import { ChevronRight } from '@styled-icons/boxicons-solid/ChevronRight';
import { Circle } from '@styled-icons/boxicons-solid/Circle';
import { CalendarTodo } from '@styled-icons/remix-line/CalendarTodo';
import { Location } from '@styled-icons/ionicons-outline/Location';

export type ImageIconProps = {
  icon: 'chevronLeft' | 'chevromRight' | 'circle' | 'calendarTodo' | 'location';
  colorDark: boolean;
  size?:
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'normal'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge'
    | 'xhuge'
    | 'xxhuge'
    | 'hero'
    | 'xhero'
    | 'xxhero';
};

export const ImageIcon = ({
  icon,
  size = 'medium',
  colorDark = true,
}: ImageIconProps) => {
  if (icon === 'chevronLeft')
    return (
      <Styled.Container size={size} colorDark={colorDark}>
        <ChevronLeft />
      </Styled.Container>
    );
  if (icon === 'chevromRight')
    return (
      <Styled.Container size={size} colorDark={colorDark}>
        <ChevronRight />
      </Styled.Container>
    );

  if (icon === 'circle')
    return (
      <Styled.Container size={size} colorDark={colorDark}>
        <Circle />
      </Styled.Container>
    );

  if (icon === 'calendarTodo')
    return (
      <Styled.Container size={size} colorDark={colorDark}>
        <CalendarTodo />
      </Styled.Container>
    );

  if (icon === 'location')
    return (
      <Styled.Container size={size} colorDark={colorDark}>
        <Location />
      </Styled.Container>
    );
};
