import React, { useState } from 'react';
import { Email } from '@styled-icons/material-outlined/Email';

import { TextInput } from '../TextInput';
import * as Styled from './styles';
import { Button } from '../Button';
import Link from 'next/link';

export type FormForgotPasswordProps = {
  errorMessage?: string;
  onForgotPassword?: (email: string) => Promise<void>;
};

export const FormForgotPassword = ({
  errorMessage,
  onForgotPassword,
}: FormForgotPasswordProps) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (onForgotPassword) {
      await onForgotPassword(email);
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

      {!!errorMessage && (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      )}

      <Styled.ButtonContainer>
        <Button disabled={loading}>
          {loading ? 'Aguarde...' : 'Redefinir senha'}
        </Button>
      </Styled.ButtonContainer>
      <Styled.Login>
        <span>ou</span> <Link href="login">Faça login</Link>
      </Styled.Login>
    </Styled.Container>
  );
};
