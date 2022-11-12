import { accountService } from 'api/service/account';
import { FooterProps } from 'components/Footer';
import { AddressProps, FormAddress } from 'components/FormAddress';
import { CustomerProps, FormCustomer } from 'components/FormCustomer';
import { LogoLinkProps } from 'components/LogoLink';
import { MenuLinkProps } from 'components/MenuLink';
import { MenuOptions } from 'components/MenuOptions';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { Base } from 'templates/Base';

import * as Styled from './styles';

type BaseProps = {
  title: string;
  slug: string;
  menuLink: MenuLinkProps[];
  logoLink: LogoLinkProps;
  footer: FooterProps;
};

export type UserPanelProps = {
  customer: CustomerProps;
  addressData: AddressProps;
  base: BaseProps;
};
export const UserPanel = ({ customer, addressData, base }: UserPanelProps) => {
  const { data: session } = useSession();
  const { menuLink, logoLink, footer } = base;
  const { text, link, srcImg } = logoLink;
  const [profile, setProfile] = useState(true);
  const [address, setAddress] = useState(false);

  const [errorFisrtName, setErrorFirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [errorCPF, setErrorCPF] = useState('');
  const [errorTelephone, setErrorTelephone] = useState('');
  const [errorZipcode, setErrorZipcode] = useState('');
  const [errorComplement, setErrorComplement] = useState('');
  const [errorCity, setErrorCity] = useState('');
  const [errorNeighborhood, setErrorNeighborhood] = useState('');
  const [errorNumber, setErrorNumber] = useState('');
  const [errorStreet, setErrorStreet] = useState('');
  const [errorUF, setErrorUF] = useState('');

  const handleProfile = () => {
    setProfile(true);
    setAddress(false);
  };
  const handleAddress = () => {
    setProfile(false);
    setAddress(true);
  };
  const handleCustomerChange = async (
    first_name: string,
    last_name: string,
    cpf: string,
  ) => {
    if (customer.id) {
      try {
        setErrorFirstName('');
        setErrorLastName('');
        setErrorCPF('');
        await accountService.updateCustomer(
          session.access_token,
          session.id,
          customer.id,
          first_name,
          last_name,
          cpf,
        );
        window.location.reload();
      } catch (error) {
        if (error['first_name']) setErrorFirstName(error['first_name']);
        if (error['last_name']) setErrorLastName(error['last_name']);
        if (error['cpf']) setErrorCPF(error['cpf']);
      }
    } else {
      try {
        setErrorFirstName('');
        setErrorLastName('');
        setErrorCPF('');
        const { id } = await accountService.createCustomer(
          session.access_token,
          session.id,
          first_name,
          last_name,
          cpf,
        );
        customer.id = id;
        window.location.reload();
      } catch (error) {
        if (error['first_name']) setErrorFirstName(error['first_name']);
        if (error['last_name']) setErrorLastName(error['last_name']);
        if (error['cpf']) setErrorCPF(error['cpf']);
      }
    }
  };

  const handleAddressChange = async (
    telephone?: string,
    zipcode?: string,
    complement?: string,
    city?: string,
    neighborhood?: string,
    number?: string,
    street?: string,
    uf?: string,
  ) => {
    if (addressData.id) {
      try {
        setErrorTelephone('');
        setErrorZipcode('');
        setErrorComplement('');
        setErrorCity('');
        setErrorNeighborhood('');
        setErrorNumber('');
        setErrorStreet('');
        setErrorUF('');
        await accountService.updateAddress(
          session.access_token,
          session.id,
          addressData.id,
          telephone,
          zipcode,
          complement,
          city,
          neighborhood,
          number,
          street,
          uf,
        );
        window.location.reload();
      } catch (error) {
        if (error['telephone']) setErrorTelephone(error['telephone']);
        if (error['zipcode']) setErrorZipcode(error['zipcode']);
        if (error['complement']) setErrorComplement(error['complement']);
        if (error['city']) setErrorCity(error['city']);
        if (error['neighborhood']) setErrorNeighborhood(error['neighborhood']);
        if (error['number']) setErrorNumber(error['number']);
        if (error['street']) setErrorStreet(error['street']);
        if (error['uf']) setErrorUF(error['uf']);
      }
    } else {
      try {
        setErrorTelephone('');
        setErrorZipcode('');
        setErrorComplement('');
        setErrorCity('');
        setErrorNeighborhood('');
        setErrorNumber('');
        setErrorStreet('');
        setErrorUF('');
        const { id } = await accountService.createAddress(
          session.access_token,
          session.id,
          telephone,
          zipcode,
          complement,
          city,
          neighborhood,
          number,
          street,
          uf,
        );
        addressData.id = id;
        window.location.reload();
      } catch (error) {
        if (error['telephone']) setErrorTelephone(error['telephone']);
        if (error['zipcode']) setErrorZipcode(error['zipcode']);
        if (error['complement']) setErrorComplement(error['complement']);
        if (error['city']) setErrorCity(error['city']);
        if (error['neighborhood']) setErrorNeighborhood(error['neighborhood']);
        if (error['number']) setErrorNumber(error['number']);
        if (error['street']) setErrorStreet(error['street']);
        if (error['uf']) setErrorUF(error['uf']);
      }
    }
  };

  return (
    <Base links={menuLink} footer={footer} logoData={{ text, link, srcImg }}>
      <Styled.Container>
        <Styled.MenuContainer>
          <MenuOptions
            text="Perfil"
            onClick={handleProfile}
            isActive={profile}
          />
          <MenuOptions
            text="Endereço"
            onClick={handleAddress}
            isActive={address}
          />
        </Styled.MenuContainer>
        <FormCustomer
          isVisible={profile}
          customer={customer}
          onCustomer={handleCustomerChange}
          errorMessageFirstName={errorFisrtName}
          errorMessageCPF={errorCPF}
          errorMessageLastName={errorLastName}
        />
        <FormAddress
          isVisible={address}
          address={addressData}
          onAddress={handleAddressChange}
          errorMessageCity={errorCity}
          errorMessageComplement={errorComplement}
          errorMessageNeighborhood={errorNeighborhood}
          errorMessageNumber={errorNumber}
          errorMessageStreet={errorStreet}
          errorMessageTelephone={errorTelephone}
          errorMessageUF={errorUF}
          errorMessageZipcode={errorZipcode}
        />
      </Styled.Container>
    </Base>
  );
};
