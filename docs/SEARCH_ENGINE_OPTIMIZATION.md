# SEO-оптимизация и система редиректов

## Архитектура

Проект использует SEO-оптимизированные якорные ссылки с модалками и скрытыми редиректами.

### Компоненты

1. **AnchorLink** (`components/AnchorLink.tsx`) - Компонент якорной ссылки
2. **Modal** (`components/Modal.tsx`) - Компонент модалки для рекомендаций
3. **Redirect Page** (`app/[locale]/redirect/page.tsx`) - Скрытая страница для редиректов

### Файлы конфигурации

- `public/robots.txt` - Запрет индексации redirect раздела

## Использование

### Якорная ссылка с модалкой и редиректом

```tsx
import AnchorLink from '@/components/AnchorLink';

<AnchorLink
  href="#casino"              // Якорная ссылка для SEO
  anchorId="casino"           // ID секции на странице
  redirectUrl="https://coinsgamecasino.org/casino"  // URL для редиректа
  redirectType="casino"       // Тип редиректа (casino, sport, etc.)
  refParam="hero-cta"         // Референс параметр для аналитики
  showModal={true}            // Показывать модалку перед редиректом
  modalContent={<CustomContent />}  // Кастомный контент модалки (опционально)
  modalTitle="Attention"      // Заголовок модалки (опционально)
  className="btn-primary"
>
  Go to Casino
</AnchorLink>
```

### Якорная ссылка без редиректа (обычная)

```tsx
<a href="#section-id" className="link">
  Link Text
</a>
```

## Принцип работы

1. **Для SEO**: Якорные ссылки имеют валидный `href` атрибут, что делает их индексируемыми поисковыми системами.

2. **Для пользователей**: При клике открывается модалка с рекомендациями, после подтверждения происходит редирект через скрытый раздел.

3. **Скрытые редиректы**: Редирект происходит через `/redirect?external=...&ref=...`, который закрыт от индексации в `robots.txt`.

## Redirect раздел

Скрытая страница `/redirect` обрабатывает редиректы через query параметры:

- `external` - Внешний URL для редиректа (encodeURIComponent)
- `type` - Тип редиректа (casino, sport, affiliate, etc.)
- `ref` - Референс параметр для аналитики

### Примеры использования

```
/en/redirect?external=https://example.com&ref=banner-main
/en/redirect?type=casino&ref=cta-button
```

## Типы редиректов

Доступные типы в `redirectMap`:
- `casino` - Редирект на казино
- `sport` - Редирект на спорт
- `affiliate` - Партнерская ссылка
- `login` - Страница входа
- `register` - Страница регистрации

## Robots.txt

Раздел `/redirect/` закрыт от индексации:

```
Disallow: /en/redirect/
Disallow: /ru/redirect/
Disallow: /*/redirect/
```

## Рекомендации

1. **Всегда используйте валидные href** - для SEO важно, чтобы ссылки были индексируемыми.

2. **Используйте anchorId** - для корректной работы якорного скролла.

3. **Добавляйте refParam** - для отслеживания источника переходов в аналитике.

4. **Кастомизируйте модалки** - используйте `modalContent` для добавления рекомендаций и предупреждений.

