import { Heading } from 'components/Heading';
import * as Styled from './styles';
import Link from 'next/link';
import { SectionContainer } from '../SectionContainer';

export type CategoryProps = {
  slug: string;
  image_url: string;
  alt?: string;
  name: string;
  id: number;
};
export type CategoriesProps = {
  categories: CategoryProps[];
};
export const Category = ({ categories }: CategoriesProps) => {
  return (
    <SectionContainer>
      <Styled.Container>
        {categories.map((category) => (
          <Styled.Item key={category.slug}>
            <Styled.Category>
              <Link href={'categories/' + `${category.id}`} passHref>
                <Styled.Link target={'_self'}>
                  <Styled.Image src={category.image_url} />
                </Styled.Link>
              </Link>
            </Styled.Category>
            <Link href={'categories/' + `${category.id}`} passHref>
              <Styled.Link target={'_self'}>
                <Styled.Description>
                  <Heading as="h3" colorDark={true} size="small">
                    {category.name}
                  </Heading>
                </Styled.Description>
              </Styled.Link>
            </Link>
          </Styled.Item>
        ))}
      </Styled.Container>
    </SectionContainer>
  );
};
