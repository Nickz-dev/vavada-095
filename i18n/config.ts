export const locales = [
  'en',
  'az',
  'bg',
  'de',
  'el',
  'es-mx',
  'fi',
  'fr-ca',
  'hi',
  'hu',
  'it',
  'ja',
  'kk',
  'ko',
  'pl',
  'pt-br',
  'ru',
  'sv',
  'tr',
  'uz'
] as const;

export type Locale = (typeof locales)[number];

// Маппинг для получения имени файла иконки (некоторые локали имеют подчеркивания в файлах)
export const localeIconMap: Record<Locale, string> = {
  'en': 'en',
  'az': 'az',
  'bg': 'bg',
  'de': 'de',
  'el': 'el',
  'es-mx': 'es_MX',
  'fi': 'fi',
  'fr-ca': 'fr_CA',
  'hi': 'hi',
  'hu': 'hu',
  'it': 'it',
  'ja': 'ja',
  'kk': 'kk',
  'ko': 'ko',
  'pl': 'pl',
  'pt-br': 'pt_BR',
  'ru': 'ru',
  'sv': 'sv',
  'tr': 'tr',
  'uz': 'uz'
};

