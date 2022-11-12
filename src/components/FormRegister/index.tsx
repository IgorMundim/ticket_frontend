import React, { useState } from 'react';
import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';
import { User } from '@styled-icons/boxicons-regular/User';
import { TextInput } from '../TextInput';
import * as Styled from './styles';
import { Button } from '../Button';
import Link from 'next/link';

export type FormRegisterProps = {
  errorMessageUserName?: string;
  errorMessageEmail?: string;
  errorMessagePassword?: string;
  onRegister?: (name: string, email: string, password: string) => Promise<void>;
};

export const FormRegister = ({
  errorMessageUserName,
  onRegister,
  errorMessageEmail,
  errorMessagePassword,
}: FormRegisterProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (onRegister) {
      await onRegister(name, email, password);
    }
    setLoading(false);
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <TextInput
        name="name-identifier"
        label="Seu name"
        onInputChange={(v) => setName(v)}
        value={name}
        icon={<User />}
        type="text"
        errorMessage={errorMessageUserName}
      />
      <TextInput
        name="user-identifier"
        label="Seu e-mail"
        onInputChange={(v) => setEmail(v)}
        value={email}
        icon={<Email />}
        type="email"
        errorMessage={errorMessageEmail}
      />
      <TextInput
        name="user-password"
        label="Sua senha"
        onInputChange={(v) => setPassword(v)}
        value={password}
        icon={<Password />}
        type="password"
        errorMessage={errorMessagePassword}
      />

      <Styled.ButtonContainer>
        <Button disabled={loading}>
          {loading ? 'Aguarde...' : 'Cadastre-se'}
        </Button>
      </Styled.ButtonContainer>
      <Styled.Terms>
        <span>
          Ao se inscrever, você concorda com nossos
          <Link href="/">Termos de Uso</Link> e com a
          <Link href="/">Politica de Privacidade</Link>
        </span>
      </Styled.Terms>
      <Styled.Login>
        <span>Já tem uma conta?</span>
        <Link href="login"> Faça login </Link>
      </Styled.Login>
    </Styled.Container>
  );
};
