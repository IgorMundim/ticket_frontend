import { TextInput } from 'components/TextInput';
import { useState } from 'react';
import * as Styled from './styles';
import { fhoneMask } from './fhoneMask';
import { cepMask } from './cepMask';
import { Button } from 'components/Button';
export type AddressProps = {
  telephone: string;
  zipcode: string;
  complement: string;
  city: string;
  neighborhood: string;
  number: string;
  street: string;
  uf: string;
  id: string;
};

export type FormAddressProps = {
  address?: AddressProps;
  errorMessageTelephone?: string;
  errorMessageZipcode?: string;
  errorMessageComplement?: string;
  errorMessageCity?: string;
  errorMessageNeighborhood?: string;
  errorMessageNumber?: string;
  errorMessageStreet?: string;
  errorMessageUF?: string;

  isVisible?: boolean;
  onAddress?: (
    telephone?: string,
    zipcode?: string,
    complement?: string,
    city?: string,
    neighborhood?: string,
    number?: string,
    street?: string,
    uf?: string,
  ) => Promise<void>;
};
export const FormAddress = ({
  address,
  isVisible,
  onAddress,
  errorMessageTelephone,
  errorMessageZipcode,
  errorMessageComplement,
  errorMessageCity,
  errorMessageNeighborhood,
  errorMessageNumber,
  errorMessageStreet,
  errorMessageUF,
}: FormAddressProps) => {
  const [telephone, setTelephone] = useState(address.telephone);
  const [zipcode, setZipcode] = useState(address.zipcode);
  const [complement, setComplement] = useState(address.complement);
  const [city, setCity] = useState(address.city);
  const [neighborhood, setNeighborhood] = useState(address.neighborhood);
  const [number, setNumber] = useState(address.number);
  const [street, setStreet] = useState(address.street);
  const [uf, setUF] = useState(address.uf);

  const [loading, setLoading] = useState(false);
  const handleAddress = () => {
    fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setZipcode(data.cep);
        setStreet(data.logradouro);
        setComplement(data.complemento);
        setNeighborhood(data.bairro);
        setCity(data.localidade);
        setUF(data.uf);
      });
  };
  const handleSubmit = async (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    if (onAddress) {
      await onAddress(
        telephone,
        zipcode,
        complement,
        city,
        neighborhood,
        number,
        street,
        uf,
      );
    }
    setLoading(false);
  };
  return (
    <Styled.Container onSubmit={handleSubmit} isVisible={isVisible}>
      <TextInput
        name="zipcode"
        value={zipcode}
        label="CEP"
        errorMessage={errorMessageZipcode}
        onInputChange={(v) => setZipcode(cepMask(v))}
        onInputBlur={handleAddress}
      ></TextInput>
      <TextInput
        name="telephone"
        value={telephone}
        label="Telefone"
        errorMessage={errorMessageTelephone}
        onInputChange={(v) => setTelephone(fhoneMask(v))}
      ></TextInput>

      <TextInput
        name="complement"
        value={complement}
        label="Complemento"
        errorMessage={errorMessageComplement}
        onInputChange={(v) => setComplement(v)}
      ></TextInput>
      <TextInput
        name="city"
        value={city}
        label="Cidade"
        errorMessage={errorMessageCity}
        onInputChange={(v) => setCity(v)}
      ></TextInput>
      <TextInput
        name="neighborhood"
        value={neighborhood}
        label="Bairro"
        errorMessage={errorMessageNeighborhood}
        onInputChange={(v) => setNeighborhood(v)}
      ></TextInput>
      <TextInput
        name="number"
        value={number}
        label="Numero"
        errorMessage={errorMessageNumber}
        onInputChange={(v) => setNumber(v)}
      ></TextInput>
      <TextInput
        name="street"
        value={street}
        label="Logradouro"
        errorMessage={errorMessageStreet}
        onInputChange={(v) => setStreet(v)}
      ></TextInput>
      <TextInput
        name="uf"
        value={uf}
        label="UF"
        errorMessage={errorMessageUF}
        onInputChange={(v) => setUF(v)}
      ></TextInput>

      <Styled.ButtonContainer>
        <Button disabled={loading}>{loading ? 'Aguarde...' : 'Salvar'}</Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};
