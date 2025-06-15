/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHEET_URL: string;
  // додай інші, якщо треба:
  // readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
