import { Paragraph } from '../Paragraph';
import { SlideImage } from '../SlideImage';
import { Heading } from '../Heading';
import * as Styled from './styles';
export type SlideItemProps = {
  src: string;
  title: string;
  description: string;
  alt: string;
  link: string;
};
export const SlideItem = ({ src, title, description, alt }: SlideItemProps) => {
  return (
    <Styled.Slide>
      <SlideImage src={src} alt={alt} />
      <Styled.Description>
        <Heading as={'h3'} colorDark={false} size={'small'} uppercase={true}>
          {title}
        </Heading>
        <Paragraph colorDark={false} size={'xsmall'}>
          {description}
        </Paragraph>
      </Styled.Description>
    </Styled.Slide>
  );
};
