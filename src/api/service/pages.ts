import { fetchWrapper } from '../helpers/fetch-wrapper';

export const pageService = {
  home,
  base,
};

function home() {
  return fetchWrapper
    .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/pages/home`)
    .then((data) => {
      return data;
    });
}

function base() {
  return fetchWrapper
    .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/pages/base`)
    .then((data) => {
      return data;
    });
}
