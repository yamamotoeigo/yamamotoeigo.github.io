import { createClient } from 'microcms-js-sdk';

// microCMSのクライアントを作成
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN!, // microCMSのサービスドメイン
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!, // APIキー
});