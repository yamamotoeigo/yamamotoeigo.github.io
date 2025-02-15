import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_APP_DOMAIN || "",
  apiKey: process.env.MICROCMS_APP_KEY || "",
});
