import { TextInput } from 'components/TextInput';
import { useState } from 'react';
import * as Styled from './styles';
import { cpfMask } from './cpfMask';
import { Button } from 'components/Button';
export type CustomerProps = {
  first_name: string;
  last_name: string;
  cpf: string;
  id: string;
};

export type FormCustomerProps = {
  customer?: CustomerProps;
  errorMessageFirstName?: string;
  errorMessageLastName?: string;
  errorMessageCPF?: string;
  isVisible?: boolean;
  onCustomer?: (
    first_name: string,
    last_name: string,
    cpf: string,
  ) => Promise<void>;
};

export const FormCustomer = ({
  customer,
  isVisible,
  onCustomer,
  errorMessageFirstName,
  errorMessageLastName,
  errorMessageCPF,
}: FormCustomerProps) => {
  const [first_name, setFirstName] = useState(customer.first_name);
  const [last_name, setLastName] = useState(customer.last_name);
  const [cpf, setCPF] = useState(customer.cpf);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (onCustomer) {
      await onCustomer(first_name, last_name, cpf);
    }
    setLoading(false);
  };
  return (
    <Styled.Container onSubmit={handleSubmit} isVisible={isVisible}>
      <TextInput
        name="first_name"
        value={first_name}
        label="Nome"
        errorMessage={errorMessageFirstName}
        onInputChange={(v) => setFirstName(v)}
      ></TextInput>
      <TextInput
        name="last_name"
        value={last_name}
        label="Sobrenome"
        errorMessage={errorMessageLastName}
        onInputChange={(v) => setLastName(v)}
      ></TextInput>
      <TextInput
        name="cpf"
        value={cpf}
        label="CPF"
        errorMessage={errorMessageCPF}
        onInputChange={(v) => setCPF(cpfMask(v))}
      ></TextInput>
      <Styled.ButtonContainer>
        <Button disabled={loading}>{loading ? 'Aguarde...' : 'Salvar'}</Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};
