import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { Facebook2 } from '@styled-icons/icomoon/Facebook2';
import { Instagram } from '@styled-icons/bootstrap/Instagram';
export type FooterProps = {
  footerHtml: string;
  src_img: string;
  alt_text: string;
};
export type FooterBaseProps = {
  footer: FooterProps;
};

export const Footer = ({ footer }: FooterBaseProps) => {
  console.log(footer.src_img);
  return (
    <Styled.Container>
      <div>
        <Styled.Image>
          <img src={footer.src_img} alt={footer.alt_text} />
        </Styled.Image>
        <Facebook2 />
        <Instagram />
        <TextComponent>{footer.footerHtml}</TextComponent>
      </div>
    </Styled.Container>
  );
};
