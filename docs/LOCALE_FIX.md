# Исправление предупреждения о deprecated locale параметре

## Проблема

Предупреждение: `The 'locale' parameter in 'getRequestConfig' is deprecated, please switch to 'await requestLocale'`

## Решение

Использовать `requestLocale` вместо параметра `locale` в функции `getRequestConfig`.

### Было (устаревший способ):

```typescript
export default getRequestConfig(async ({ locale }) => {
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

### Стало (правильный способ для next-intl 3.22+):

```typescript
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

## Проверка работы локалей

1. **Английский язык**: http://localhost:3000/ или http://localhost:3000/en
2. **Русский язык**: http://localhost:3000/ru

Оба языка должны работать корректно.

## Структура локалей

- Локали определены в `i18n/config.ts`: `['en', 'ru']`
- Переводы в `messages/en.json` и `messages/ru.json`
- Middleware обрабатывает локали через `next-intl/middleware`

