import * as Styled from './styles';

export type SlideImageProps = {
  src: string;
  alt: string;
};

export const SlideImage = ({ src, alt }: SlideImageProps) => {
  return <Styled.Image src={src} alt={alt} />;
};
