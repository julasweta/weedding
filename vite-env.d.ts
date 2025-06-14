/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TELEGRAM_TOKEN: string;
  // додай інші змінні, якщо потрібно
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
