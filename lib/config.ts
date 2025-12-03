const ensureTrailingSlash = (url: string) => (url.endsWith('/') ? url : `${url}/`);

/**
 * Единый URL для внешних редиректов.
 * Значение берётся из NEXT_PUBLIC_CASINO_URL, при отсутствии используется дефолт.
 */
const envCasinoUrl =
  process.env.NEXT_PUBLIC_CASINO_URL ||
  process.env.CASINO_BASE_URL ||
  'https://vavada2.slot24.bet';

export const CASINO_BASE_URL = ensureTrailingSlash(envCasinoUrl);


