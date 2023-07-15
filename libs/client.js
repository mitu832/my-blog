import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'light-js-blog',
  apiKey: process.env.API_KEY,
});
