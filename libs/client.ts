import { createClient } from 'microcms-js-sdk';

const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
if (!serviceDomain || !apiKey) {
  throw new Error('microCMS の serviceDomain および apiKey は必須です。環境変数を確認してください。');
}

export const client = createClient({
  serviceDomain,
  apiKey,
});
