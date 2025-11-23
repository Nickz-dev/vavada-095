# 🔧 Подготовка базового шаблона из текущего проекта

Чеклист для создания чистого шаблона из готового проекта.

---

## 📦 ЧТО ОСТАВИТЬ В ШАБЛОНЕ

### ✅ Инфраструктура (100% оставить)
- [x] Next.js конфигурация (`next.config.js`, `tsconfig.json`)
- [x] Tailwind конфигурация (`tailwind.config.ts`)
- [x] Middleware для локалей (`middleware.ts`)
- [x] Package.json с зависимостями
- [x] `.env.example` с шаблоном переменных
- [x] `.gitignore`

### ✅ SEO инфраструктура (100% оставить)
- [x] `components/SEO.tsx` - базовая SEO структура
- [x] `components/StructuredData.tsx` - Organization, WebSite Schema
- [x] `components/ArticleStructuredData.tsx` - Article Schema
- [x] `components/BreadcrumbStructuredData.tsx` - Breadcrumb Schema
- [x] `components/FAQSchema.tsx` - FAQ Schema
- [x] `app/sitemap.ts` - динамический sitemap
- [x] `app/robots.ts` или `public/robots.txt` - robots.txt
- [x] `app/[locale]/layout.tsx` - базовый layout с SEO

### ✅ Мультиязычность (100% оставить)
- [x] Структура `messages/en.json`, `messages/ru.json`, `messages/de.json`
- [x] Базовая структура переводов (common, header, footer, seo)
- [x] Middleware для локалей

### ✅ Базовые UI компоненты (100% оставить)
- [x] `components/Modal.tsx` - модальное окно
- [x] `components/AnchorLink.tsx` - якорная ссылка с модалкой
- [x] `components/LanguageSwitcher.tsx` - переключатель языков
- [x] `components/GoogleAnalytics.tsx` - Google Analytics

### ✅ Система редиректов (100% оставить)
- [x] `app/[locale]/redirect/page.tsx` - страница редиректов
- [x] Базовый redirectMap структура

### ✅ Базовые layout компоненты (заглушки)
- [x] `components/Header.tsx` - базовый Header (можно упростить)
- [x] `components/Footer.tsx` - базовый Footer (можно упростить)

### ✅ Утилиты и хелперы
- [x] `components/GameCarousel.tsx` - базовый GameCarousel (можно упростить)
- [x] `components/CountdownTimer.tsx` - таймер обратного отсчета (если есть)

---

## 🗑️ ЧТО УБРАТЬ ИЗ ШАБЛОНА

### ❌ Специфичный контент
- [ ] `components/Hero.tsx` - заменить на заглушку
- [ ] `components/BigWins.tsx` - удалить (специфично)
- [ ] `components/Navigation.tsx` - удалить или заглушка
- [ ] `components/TrendingGames.tsx` - удалить (это инстанс GameCarousel)
- [ ] `components/BestGames.tsx` - удалить (это инстанс GameCarousel)
- [ ] `components/CasualGames.tsx` - удалить (это инстанс GameCarousel)
- [ ] `components/LiveGames.tsx` - удалить (это инстанс GameCarousel)
- [ ] `components/NewGames.tsx` - удалить (это инстанс GameCarousel)
- [ ] `components/Collections.tsx` - удалить или заглушка
- [ ] `components/CollectionsSection.tsx` - удалить
- [ ] `components/Tournaments.tsx` - удалить или заглушка
- [ ] `components/TournamentsSection.tsx` - удалить
- [ ] `components/ReviewSection.tsx` - удалить или заглушка

### ❌ Специфичные страницы
- [ ] `app/[locale]/review/page.tsx` - оставить как пример или заглушку
- [ ] `app/[locale]/review/layout.tsx` - оставить как пример

### ❌ Конкретные изображения
- [ ] Все изображения в `public/assets/images/slots/` - удалить
- [ ] Оставить только структуру папок с `.gitkeep`
- [ ] `public/og-image.jpg` - заменить на placeholder
- [ ] `public/assets/icons/favicon.svg` - оставить базовый

### ❌ Конкретные переводы
- [ ] Удалить специфичный контент из `messages/*.json`
- [ ] Оставить только базовую структуру:
  - `common` (login, register, cancel, continue)
  - `header` (базовые ключи)
  - `footer` (базовые ключи)
  - `seo` (базовые ключи)

### ❌ Специфичные данные
- [ ] Игры из GameCarousel инстансов
- [ ] Турниры данные
- [ ] Collections данные

---

## 🔄 ЧТО ПРЕОБРАЗОВАТЬ В ЗАГЛУШКИ

### 1. Hero компонент → заглушка
```typescript
// components/sections/Hero.tsx
'use client';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* TODO: Add Hero content */}
    </section>
  );
}
```

### 2. GameCarousel инстансы → удалить, оставить только базовый GameCarousel
```typescript
// components/ui/GameCarousel.tsx
// Оставить базовый компонент, но упростить
```

### 3. Главная страница → минимальная структура
```typescript
// app/[locale]/page.tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen text-white" style={{ backgroundColor: '#0F1923' }}>
        {/* TODO: Add sections */}
      </main>
      <Footer />
    </>
  );
}
```

### 4. Header/Footer → упростить
- Убрать специфичные ссылки
- Оставить базовую структуру
- Оставить LanguageSwitcher

---

## 📝 ПОШАГОВЫЙ ПЛАН СОЗДАНИЯ ШАБЛОНА

### Шаг 1: Копирование проекта
```bash
cp -r coinsgamecasino template-casino-base
cd template-casino-base
```

### Шаг 2: Удаление специфичного контента
```bash
# Удалить специфичные компоненты
rm components/Hero.tsx
rm components/BigWins.tsx
rm components/Navigation.tsx
rm components/TrendingGames.tsx
rm components/BestGames.tsx
rm components/CasualGames.tsx
rm components/LiveGames.tsx
rm components/NewGames.tsx
rm components/Collections.tsx
rm components/CollectionsSection.tsx
rm components/Tournaments.tsx
rm components/TournamentsSection.tsx
rm components/ReviewSection.tsx

# Удалить изображения
rm -rf public/assets/images/slots/
mkdir -p public/assets/images/slots/.gitkeep
```

### Шаг 3: Создание заглушек
- Создать `components/sections/Hero.tsx` (заглушка)
- Упростить `app/[locale]/page.tsx`
- Упростить Header/Footer

### Шаг 4: Очистка переводов
- Очистить `messages/en.json` (оставить базовую структуру)
- Очистить `messages/ru.json` (оставить базовую структуру)
- Очистить `messages/de.json` (оставить базовую структуру)

### Шаг 5: Обновление SEO
- Заменить названия на placeholder в `components/SEO.tsx`
- Обновить `app/[locale]/layout.tsx` (Organization Schema)
- Обновить `app/sitemap.ts` (URL на placeholder)

### Шаг 6: Обновление README
- Создать `README.md` с инструкцией по быстрому старту
- Добавить ссылки на документацию

### Шаг 7: Создание документации
- Скопировать `docs/TEMPLATE_GUIDE.md`
- Скопировать `docs/QUICK_START.md`
- Скопировать `docs/TEMPLATE_PREPARATION.md` (этот файл)

### Шаг 8: Финальная проверка
```bash
# Проверить build
npm run build

# Проверить, что все работает
npm run dev
```

---

## ✅ ФИНАЛЬНАЯ СТРУКТУРА ШАБЛОНА

```
template-casino-base/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # ✅ SEO настроен
│   │   ├── page.tsx             # ✅ Минимальная структура
│   │   └── redirect/
│   │       └── page.tsx         # ✅ Базовая структура
│   ├── globals.css
│   ├── sitemap.ts               # ✅ Динамический sitemap
│   └── robots.ts                # ✅ Robots.txt
├── components/
│   ├── SEO/                     # ✅ Вся SEO инфраструктура
│   ├── layout/                  # ✅ Header, Footer (упрощенные)
│   ├── ui/                      # ✅ Modal, AnchorLink, LanguageSwitcher
│   ├── sections/                # ✅ Заглушки (Hero, GameSection)
│   └── GoogleAnalytics.tsx      # ✅ GA компонент
├── messages/
│   ├── en.json                  # ✅ Базовая структура
│   ├── ru.json                  # ✅ Базовая структура
│   └── de.json                  # ✅ Базовая структура
├── public/
│   ├── robots.txt               # ✅ Базовый robots.txt
│   ├── og-image.jpg             # ✅ Placeholder
│   └── assets/
│       ├── icons/
│       │   └── favicon.svg      # ✅ Базовый favicon
│       └── images/
│           └── .gitkeep         # ✅ Структура папок
├── docs/
│   ├── TEMPLATE_GUIDE.md        # ✅ Руководство
│   ├── QUICK_START.md           # ✅ Быстрый старт
│   └── TEMPLATE_PREPARATION.md  # ✅ Этот файл
├── .env.example                 # ✅ Шаблон переменных
├── package.json                 # ✅ Зависимости
├── README.md                    # ✅ Инструкция
└── ...
```

---

## 🎯 РЕЗУЛЬТАТ

После подготовки шаблона у вас будет:
- ✅ Чистая базовая структура
- ✅ Вся SEO инфраструктура
- ✅ Мультиязычность настроена
- ✅ Базовые компоненты готовы
- ✅ Документация по использованию

**Время подготовки шаблона:** ~2-3 часа  
**Экономия на каждом проекте:** ~5-6 часов

---

## 📞 СЛЕДУЮЩИЕ ШАГИ

1. Создать шаблон по этому чеклисту
2. Протестировать на следующем проекте
3. Собрать обратную связь
4. Итеративно улучшать шаблон

