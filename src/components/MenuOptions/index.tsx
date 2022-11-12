import * as Styled from './styles';

export type MenuOptionsProps = {
  text?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const MenuOptions = ({ text, onClick, isActive }: MenuOptionsProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Styled.Container onClick={handleClick} isActive={isActive}>
      {text}
    </Styled.Container>
  );
};
