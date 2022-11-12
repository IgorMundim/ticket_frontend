import { FormRegister } from 'components/FormRegister';
import { ContainerConnect } from '../../components/ContainerConnect';
import { accountService } from '../../api/service/account';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { MenuLinkProps } from 'components/MenuLink';
import { LogoLinkProps } from 'components/LogoLink';
import { Base } from 'templates/Base';
import { FooterProps } from 'components/Footer';

type BaseProps = {
  title: string;
  slug: string;
  menuLink: MenuLinkProps[];
  logoLink: LogoLinkProps;
  footer: FooterProps;
};
export type RegisterProps = {
  base: BaseProps;
};

function Register({ base }: RegisterProps) {
  const { menuLink, logoLink, footer } = base;
  const { text, link, srcImg } = logoLink;
  const [errorUserName, setErrorUserName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const router = useRouter();
  const handleRegister = async (
    username: string,
    email: string,
    password: string,
  ) => {
    const redirect = router.query?.redirect || '/';
    try {
      await accountService.register(username, email, password);
      const login = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: redirect as string,
      });
      window.location.href = login.url;
    } catch (e) {
      if (e['password']) setErrorPassword(e['password']);
      if (e['email']) setErrorEmail(e['email']);
      if (e['username']) setErrorUserName(e['username']);
    }
  };

  return (
    <Base links={menuLink} footer={footer} logoData={{ text, link, srcImg }}>
      <ContainerConnect>
        <FormRegister
          onRegister={handleRegister}
          errorMessageUserName={errorUserName}
          errorMessageEmail={errorEmail}
          errorMessagePassword={errorPassword}
        ></FormRegister>
      </ContainerConnect>
    </Base>
  );
}

export default Register;
