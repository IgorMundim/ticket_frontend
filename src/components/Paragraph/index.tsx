import * as Styled from './styles';

export type ParagraphProps = {
  children: React.ReactNode;
  colorDark?: boolean;
  uppercase?: boolean;
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

export const Paragraph = ({
  children,
  colorDark = true,
  uppercase = false,
  size = 'medium',
}: ParagraphProps) => {
  return (
    <Styled.Container uppercase={uppercase} colorDark={colorDark} size={size}>
      {children}
    </Styled.Container>
  );
};
