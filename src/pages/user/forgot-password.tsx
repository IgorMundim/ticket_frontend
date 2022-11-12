import { useState } from 'react';
import { ContainerConnect } from '../../components/ContainerConnect';
import { FormForgotPassword } from 'components/FormForgotPassword';

export default function ForgotPasswordPage() {
  const [error, setError] = useState('');
  const handleForgotPassword = async () => {
    setError('Função não cadastrada!');
  };

  return (
    <ContainerConnect>
      <FormForgotPassword
        onForgotPassword={handleForgotPassword}
        errorMessage={error}
      />
    </ContainerConnect>
  );
}
