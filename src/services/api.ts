import axios from 'axios';

export const baseURL = 'https://futdb.app/api/';

export const access_token = '384c39ec-db3c-4178-a0ed-15d7ea2d627b';

export const config = {
  headers: {'X-AUTH-TOKEN': `${access_token}`},
};

export const api = axios.create({
  baseURL: baseURL,
});
