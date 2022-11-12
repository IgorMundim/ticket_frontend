import { Heading } from '../Heading';
import * as Styled from './styles';
export type BannerCategoryProps = {
  image_url: string;
  alt: string;
  name: string;
};

export const BannerCategory = ({
  image_url,
  alt,
  name,
}: BannerCategoryProps) => {
  return (
    <Styled.Container>
      <Styled.Image src={image_url} alt={alt} />
      <Styled.Description>
        <Heading as="h2" size="medium" colorDark={false} uppercase={true}>
          {name}
        </Heading>
      </Styled.Description>
    </Styled.Container>
  );
};
