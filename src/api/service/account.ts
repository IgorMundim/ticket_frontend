import { fetchWrapper } from '../helpers/fetch-wrapper';

export const accountService = {
  login,
  loginGoogle,
  register,
  currentAccount,
  refreshToken,
  currentCustomer,
  currentAddress,
  createCustomer,
  updateCustomer,
  updateAddress,
  createAddress,
};

function login(email: string, password: string) {
  return fetchWrapper
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/token`, {
      grant_type: 'password',
      username: email,
      password: password,
      client_id: process.env.BACKEND_ID,
      client_secret: process.env.BACKEND_SECRET,
    })
    .then((jwt) => {
      return jwt;
    });
}

function refreshToken(refresh_token: string) {
  return fetchWrapper
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/token`, {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
      client_id: process.env.BACKEND_ID,
      client_secret: process.env.BACKEND_SECRET,
    })
    .then((jwt) => {
      return jwt;
    });
}

function loginGoogle(accesstoken: string) {
  return fetchWrapper
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/convert-token`, {
      token: accesstoken,
      backend: 'google-oauth2',
      grant_type: 'convert_token',
      client_id: process.env.BACKEND_ID,
      client_secret: process.env.BACKEND_SECRET,
    })
    .then((jwt) => {
      return jwt;
    });
}

function register(username: string, email: string, password: string) {
  return fetchWrapper
    .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/`, {
      username: username,
      email: email,
      password: password,
      password2: password,
    })
    .then((response) => {
      return response;
    });
}

function currentAccount(access_token: string) {
  return fetchWrapper
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/current/`,
      access_token,
    )
    .then((response) => {
      return response;
    });
}

function currentCustomer(access_token: string, id: string) {
  return fetchWrapper
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/${id}/customers/`,
      access_token,
    )
    .then((response) => {
      return response;
    });
}

function createCustomer(
  access_token: string,
  id: string,
  first_name: string,
  last_name: string,
  cpf: string,
) {
  const account = id;
  return fetchWrapper
    .post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/${id}/customers/`,
      { account, first_name, last_name, cpf },
      access_token,
    )
    .then((response) => {
      return response;
    });
}

function updateCustomer(
  access_token: string,
  account: string,
  id: string,
  first_name: string,
  last_name: string,
  cpf: string,
) {
  return fetchWrapper
    .put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/customers/${id}/`,
      { account, first_name, last_name, cpf },
      access_token,
    )
    .then((response) => {
      return response;
    });
}

function currentAddress(access_token: string, id: string) {
  return fetchWrapper
    .get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/${id}/addresses/`,
      access_token,
    )
    .then((response) => {
      return response;
    });
}

function createAddress(
  access_token: string,
  id: string,
  telephone: string,
  zipcode: string,
  complement: string,
  city: string,
  neighborhood: string,
  number: string,
  street: string,
  uf: string,
) {
  const account = id;
  return fetchWrapper
    .post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/${id}/addresses/`,
      {
        account,
        telephone,
        zipcode,
        complement,
        city,
        neighborhood,
        number,
        street,
        uf,
      },
      access_token,
    )
    .then((response) => {
      return response;
    });
}

function updateAddress(
  access_token: string,
  account: string,
  id: string,
  telephone: string,
  zipcode: string,
  complement: string,
  city: string,
  neighborhood: string,
  number: string,
  street: string,
  uf: string,
) {
  return fetchWrapper
    .put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/accounts/addresses/${id}/`,
      {
        account,
        telephone,
        zipcode,
        complement,
        city,
        neighborhood,
        number,
        street,
        uf,
      },
      access_token,
    )
    .then((response) => {
      return response;
    });
}
