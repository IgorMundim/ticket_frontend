import React, { useState } from 'react';
import { Email } from '@styled-icons/material-outlined/Email';
import { Password } from '@styled-icons/material-outlined/Password';

import { TextInput } from '../TextInput';
import * as Styled from './styles';
import { Button } from '../Button';
import Link from 'next/link';

export type FormLoginProps = {
  errorMessage?: string;
  onLogin?: (email: string, password: string) => Promise<void>;
};

export const FormLogin = ({ errorMessage, onLogin }: FormLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (onLogin) {
      await onLogin(email, password);
    }
    setLoading(false);
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <TextInput
        name="user-identifier"
        label="Seu e-mail"
        onInputChange={(v) => setEmail(v)}
        value={email}
        icon={<Email />}
        type="email"
      />
      <TextInput
        name="user-password"
        label="Sua senha"
        onInputChange={(v) => setPassword(v)}
        value={password}
        icon={<Password />}
        type="password"
      />

      {!!errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}

      <Styled.ButtonContainer>
        <Button disabled={loading}>
          {loading ? 'Aguarde...' : 'Fazer login'}
        </Button>
      </Styled.ButtonContainer>
      <Styled.ForgotPassword>
        <span>ou</span>
        <Link href="forgot-password">Esqueci a minha senha</Link>
      </Styled.ForgotPassword>
      <Styled.Register>
        <span>Não tem uma conta?</span>
        <Link href="register">Cadastre-se</Link>
      </Styled.Register>
    </Styled.Container>
  );
};
