import { fetchWrapper } from '../helpers/fetch-wrapper';

export const eventsService = {
  categories,
  category,
  events,
  event,
};

function categories() {
  return fetchWrapper
    .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/events/categories`)
    .then((data) => {
      return data;
    });
}

function category(id: string) {
  return fetchWrapper
    .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/events/categories/${id}`)
    .then((data) => {
      return data;
    });
}

function events() {
  return fetchWrapper
    .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/events/`)
    .then((data) => {
      return data;
    });
}

function event(id: string) {
  return fetchWrapper
    .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/events/${id}`)
    .then((data) => {
      return data;
    });
}
