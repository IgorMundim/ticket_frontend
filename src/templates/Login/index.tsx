import { Button } from '../../components/Button';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ContainerConnect } from '../../components/ContainerConnect';
import { FormLogin } from 'components/FormLogin';
import { LogoLinkProps } from 'components/LogoLink';
import { MenuLinkProps } from 'components/MenuLink';
import { Base } from 'templates/Base';
import { FooterProps } from 'components/Footer';
type BaseProps = {
  title: string;
  slug: string;
  menuLink: MenuLinkProps[];
  logoLink: LogoLinkProps;
  footer: FooterProps;
};
export type LoginProps = {
  base: BaseProps;
};

function Login({ base }: LoginProps) {
  const { menuLink, logoLink, footer } = base;
  const { text, link, srcImg } = logoLink;
  const router = useRouter();
  const [error, setError] = useState('');
  const handleLogin = async (email: string, password: string) => {
    const redirect = router.query?.redirect || '/';
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: redirect as string,
    });

    if (!response.ok) {
      setError('Usuário ou senha invalido');
      return;
    }
    window.location.href = response.url;
  };

  const handleLoginGoogle = async () => {
    const redirect = router.query?.redirect || '/';
    await signIn('google', { callbackUrl: redirect as string });
  };

  return (
    <Base links={menuLink} footer={footer} logoData={{ text, link, srcImg }}>
      <ContainerConnect>
        <Button onClick={handleLoginGoogle} icon={<FcGoogle />} color="primary">
          {'Fazer login'}
        </Button>
        <FormLogin onLogin={handleLogin} errorMessage={error} />
      </ContainerConnect>
    </Base>
  );
}

export default Login;
