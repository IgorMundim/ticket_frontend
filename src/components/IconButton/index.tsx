import * as Styled from './styles';
import { ChevronLeft } from '@styled-icons/boxicons-solid/ChevronLeft';
import { ChevronRight } from '@styled-icons/boxicons-solid/ChevronRight';
import { Circle } from '@styled-icons/boxicons-solid/Circle';
import { CalendarTodo } from '@styled-icons/remix-line/CalendarTodo';
import { Location } from '@styled-icons/ionicons-outline/Location';

export type IconButtonProps = {
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
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export const IconButton = ({
  icon,
  size = 'medium',
  colorDark = true,
  onClick,
  type = 'button',
}: IconButtonProps) => {
  if (icon === 'chevronLeft')
    return (
      <Styled.Container
        onClick={onClick}
        size={size}
        type={type}
        colorDark={colorDark}
      >
        <ChevronLeft />
      </Styled.Container>
    );
  if (icon === 'chevromRight')
    return (
      <Styled.Container onClick={onClick} size={size} colorDark={colorDark}>
        <ChevronRight />
      </Styled.Container>
    );

  if (icon === 'circle')
    return (
      <Styled.Container onClick={onClick} size={size} colorDark={colorDark}>
        <Circle />
      </Styled.Container>
    );

  if (icon === 'calendarTodo')
    return (
      <Styled.Container onClick={onClick} size={size} colorDark={colorDark}>
        <CalendarTodo />
      </Styled.Container>
    );

  if (icon === 'location')
    return (
      <Styled.Container onClick={onClick} size={size} colorDark={colorDark}>
        <Location />
      </Styled.Container>
    );
};
