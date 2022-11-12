export const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

function get(url: string, access_token?: string) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(access_token),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url: string, body, access_token?: string) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(access_token),
    },
    credentials: 'include' as RequestCredentials,
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function put(url: string, body, access_token?: string) {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(access_token),
    },
    credentials: 'include' as RequestCredentials,
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function _delete(url: string) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function authHeader(access_token: string): { Authorization?: string } {
  if (access_token) {
    return { Authorization: `Bearer ${access_token}` };
  } else {
    return {};
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      console.log(response.status);
      const error = data;
      console.log(data);
      return Promise.reject(error);
    }
    return data;
  });
}
