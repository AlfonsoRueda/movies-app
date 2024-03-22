import {AxiosAdapter} from './http';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'fa74efa32ac53d24aa11b8f541c799ec',
    language: 'es',
  },
});
