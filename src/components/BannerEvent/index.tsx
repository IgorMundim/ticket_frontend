import * as Styled from './styles';
export type BannerEventProps = {
  image_url: string;
  alt_text: string;
};

export const BannerEvent = ({ image_url, alt_text }: BannerEventProps) => {
  return (
    <Styled.Container>
      <Styled.Image src={image_url} alt={alt_text} />
    </Styled.Container>
  );
};
