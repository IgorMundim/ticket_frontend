import { TextComponent } from 'components/TextComponent';
import { Heading } from '../Heading';
import * as Styled from './styles';
export type DescriptionEventProps = {
  description: string;
};
export const DescriptionEvent = ({ description }: DescriptionEventProps) => {
  return (
    <Styled.Container>
      <Heading as="h2" size="medium">
        Descrição
      </Heading>

      <TextComponent>{description}</TextComponent>
    </Styled.Container>
  );
};
