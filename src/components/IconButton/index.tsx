import * as Styled from './styles';
import { ChevronLeft } from '@styled-icons/boxicons-solid/ChevronLeft';
import { ChevronRight } from '@styled-icons/boxicons-solid/ChevronRight';
import { Circle } from '@styled-icons/boxicons-solid/Circle';

export type IconButtonProps = {
  icon: 'chevronLeft' | 'chevromRight' | 'circle';
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
};
