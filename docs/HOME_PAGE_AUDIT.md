# Аудит главной страницы

## Обзор

Главная страница (`app/[locale]/page.tsx`) полностью реализована и включает все необходимые компоненты для казино-сайта.

## Структура страницы

```
app/[locale]/page.tsx
├── Header (компонент навигации)
├── main
│   ├── Hero (карусель с промо-слайдами)
│   ├── BeamCategories (навигация по категориям)
│   ├── GamesSection (секция с играми, фильтрами и поиском)
│   └── ReviewSeoSection (SEO-секция с кнопкой на обзор)
└── Footer (футер сайта)
```

## Компоненты главной страницы

### 1. Header (`components/layout/Header.tsx`)
- **Статус**: ✅ Реализован
- **Функционал**:
  - Логотип сайта
  - Кнопки входа и регистрации (открывают модалки)
  - Иконка помощи (на мобильных только иконка)
  - Адаптивный дизайн
- **Модалки**: Используют `tModal('redirectWarning')` для всех локалей

### 2. Hero (`components/sections/Hero.tsx`)
- **Статус**: ✅ Реализован
- **Функционал**:
  - Карусель с 4 слайдами (Jackpot, Crypto, Maxbet, Sport)
  - Автопрокрутка
  - Навигационные точки
  - Адаптивный дизайн
- **Стили**:
  - Мобильная версия: высота 100px, `object-cover` для изображений
  - Десктоп: поднят на -50px (`md:mt-[-50px]`)
  - Уменьшенные точки навигации и текст

### 3. BeamCategories (`components/layout/BeamCategories.tsx`)
- **Статус**: ✅ Реализован
- **Функционал**:
  - 5 категорий: Слоты, Live-игры, Обзор, Crash, Турниры
  - Все категории открывают модалку, кроме "Обзор" (ведет на `/review`)
  - Иконки из `react-icons`
  - Полная локализация
- **Стили**:
  - Высота: 60px (десктоп), 90px (мобильные)
  - Фон: `#1F2132` с диагональными полосками (10px)
  - Контурное затемнение для объема
  - Мобильная адаптация: иконки и текст в колонку

### 4. GamesSection (`components/sections/GamesSection.tsx`)
- **Статус**: ✅ Реализован
- **Функционал**:
  - Фильтры: селект провайдеров, HIT/NEW флаги, поиск
  - Сетка игр: 2 колонки (мобильные), 3-4-5 колонок (десктоп)
  - 40 слотов в списке (можно расширить)
  - Кнопка "Больше игр" с модалкой
  - Минимальная высота контейнера: 400px (десктоп)
- **Компоненты**:
  - `GameFilters`: Фильтры и поиск
  - `GameCard`: Карточка игры с бейджами (HIT/NEW/PRE)
  - `MoreGamesButton`: Кнопка загрузки дополнительных игр
- **Стили**:
  - Фон: `#1F2132` (мобильные), `#151723` с SVG паттерном (десктоп)
  - SVG паттерн: `back_games_wided.svg` (repeat на десктопе)

### 5. ReviewSeoSection (`components/sections/ReviewSeoSection.tsx`)
- **Статус**: ✅ Реализован
- **Функционал**:
  - SEO-текст обзора казино
  - Кнопка "Полный обзор" (ведет на `/review`)
  - Полная локализация
- **Стили**:
  - Фон: `#1F2132`
  - Кнопка: зеленый градиент (как PLAY), скругленная
  - Отступ от футера: 32px (десктоп), 0 (мобильные)

### 6. Footer (`components/layout/Footer.tsx`)
- **Статус**: ✅ Реализован
- **Функционал**:
  - Навигационные ссылки
  - Кнопки приложений (iOS/Android)
  - Социальные сети
  - Переключатель языков
  - Методы оплаты
  - Предупреждение об ответственной игре
- **Стили**:
  - Фон: `#17171F`
  - Адаптивный дизайн

## Игровые компоненты

### GameCard (`components/ui/GameCard.tsx`)
- **Статус**: ✅ Реализован
- **Функционал**:
  - Квадратная карточка с изображением
  - Бейджи: HIT (#A91FFF), NEW (#4DD433), PRE (#FF8C00)
  - Кнопки PLAY/DEMO при наведении
  - Название игры внизу
  - Модалки для PLAY и DEMO
- **Стили**:
  - Фон: `#161626`
  - Hover: scale 110%
  - PLAY: 110x40px, зеленый градиент
  - DEMO: 90x25px, серый
  - Текст названия: `text-xs`

### GameFilters (`components/ui/GameFilters.tsx`)
- **Статус**: ✅ Реализован
- **Функционал**:
  - Селект провайдеров (алфавитная группировка, 3 колонки на десктопе)
  - Флаги HIT/NEW (SVG компоненты)
  - Поиск с иконкой
- **Стили**:
  - Фон: `#1D1F30`
  - Желтая рамка при выборе/hover
  - Высота: 35px
  - Скрытый скроллбар

### GameBadge (`components/ui/GameBadge.tsx`)
- **Статус**: ✅ Реализован
- **Функционал**:
  - SVG бейджи для HIT, NEW, PRE
  - Использует `icon_flag_pre.svg` и `icon_flag_supernew.svg`

### GameSortFlag (`components/ui/GameSortFlag.tsx`)
- **Статус**: ✅ Реализован
- **Функционал**:
  - SVG флаги для фильтров HIT/NEW
  - Цвета: HIT (#A91FFF), NEW (#4DD433)

## Локализация

### Поддерживаемые языки (20 локалей)
- Русский (ru)
- Английский (en)
- Немецкий (de)
- Польский (pl)
- Турецкий (tr)
- Азербайджанский (az)
- Болгарский (bg)
- Греческий (el)
- Испанский (es-mx)
- Финский (fi)
- Французский (fr-ca)
- Хинди (hi)
- Венгерский (hu)
- Итальянский (it)
- Японский (ja)
- Казахский (kk)
- Корейский (ko)
- Португальский (pt-br)
- Шведский (sv)
- Узбекский (uz)

### Ключи переводов

#### common
- `categories.slots`, `categories.live`, `categories.review`, `categories.crash`, `categories.tournament`
- `cancel`, `continue`

#### games
- `searchPlaceholder` - плейсхолдер поиска
- `noGamesFound` - сообщение, когда игры не найдены
- `allProviders` - "Все провайдеры"
- `play`, `demo` - кнопки
- `playGame`, `demoGame` - заголовки модалок
- `moreGames` - кнопка "Больше игр" (UPPERCASE для всех языков)
- `moreGamesDescription` - описание в модалке
- `loadMore` - кнопка "Загрузить"

#### reviewSeo
- `description` - SEO-текст обзора
- `button` - текст кнопки "Полный обзор"

#### modal
- `attention` - заголовок модалки
- `redirectWarning` - текст редиректа (локализован для всех языков)

## Список слотов (40 слотов)

1. Le Santa (Hacksaw Gaming) - PRE
2. Flock Me (NetEnt) - NEW
3. Snake Arena 2 (Relax) - NEW
4. Crack More Piggy Banks (Penguin King) - NEW
5. The Dog House (Pragmatic Play)
6. Wild Bounty Showdown (PG Soft)
7. Gates of Olympus Super Scatter (Pragmatic Play)
8. Gates of Olympus 1000 (Pragmatic Play)
9. Book of Dead (Play'n Go)
10. Zeus vs Hades - Gods of War (Pragmatic Play)
11. Sweet Bonanza Super Scatter (Pragmatic Play)
12. Mummyland Treasures (Belatra Games)
13. Sweet Rush Bonanza (Pragmatic Play)
14. Le Bandit (Hacksaw Gaming)
15. Duck Hunters (Nolimit City)
16. Vituss Britva God of Random (True Lab)
17. Minotaurus (Endorphina)
18. Bullets and Bounty (Hacksaw Gaming)
19. Big Bass Splash (Pragmatic Play)
20. Tome of Madness (Play'n Go)
21. Great Pigsby Megaways (Relax)
22. Dr. Rock & the Riff Reactor (True Lab)
23. Le King (Hacksaw Gaming)
24. Plinko (Apis Games)
25. Legacy of Dead (Play'n Go)
26. Wild Bandito (PG Soft)
27. Sweet Bonanza 1000 (Pragmatic Play)
28. The Dog House Megaways (Pragmatic Play)
29. Le Cowboy (Hacksaw Gaming)
30. Le Zeus (Hacksaw Gaming)
31. Ice Princess (Belatra Games)
32. Voodoo Coins (Belatra Games)
33. Crash (Apis Games)
34. Sugar Rush 1000 (Pragmatic Play)
35. Battle Rage (True Lab)
36. Chicken Road 2 (InOut)
37. Aviamasters (BGaming)
38. Crown Coins (Endorphina)
39. Royal Xmass 2 (Endorphina)
40. The Dog House – Royal Hunt (Pragmatic Play)

## Стили и цвета

### Цветовая палитра
- **Основной фон**: `#1F2132`
- **Фон игр (десктоп)**: `#151723`
- **Фон игр (мобильные)**: `#1F2132`
- **Карточки игр**: `#161626`
- **Фильтры/селекты**: `#1D1F30`
- **Футер**: `#17171F`

### Градиенты
- **PLAY кнопка**: `linear-gradient(to bottom, #9FE082, #7DCD5E)`
- **MORE GAMES кнопка**: `linear-gradient(to bottom, #6B7FA8, #4D5A85)`

### Бейджи
- **HIT**: `#A91FFF`
- **NEW**: `#4DD433`
- **PRE**: `#FF8C00`

## Адаптивность

### Мобильные устройства (< 768px)
- Header: упрощенная версия
- Hero: высота 100px
- BeamCategories: высота 90px, вертикальная раскладка
- GamesSection: 2 колонки, без SVG фона
- ReviewSeoSection: вертикальная раскладка, кнопка с отступом

### Десктоп (≥ 768px)
- Hero: поднят на -50px
- BeamCategories: горизонтальная раскладка
- GamesSection: 3-4-5 колонок, SVG фон
- ReviewSeoSection: горизонтальная раскладка, отступ от футера

## Изображения

### Структура
```
public/assets/images/
├── slots/
│   ├── 1.jpg - 40.jpg (изображения слотов)
├── back_games_wided.svg (SVG паттерн для секции игр)
└── ...
```

## Завершенные задачи

✅ Header с модалками входа/регистрации  
✅ Hero карусель с адаптивным дизайном  
✅ BeamCategories навигация с локализацией  
✅ GamesSection с фильтрами и поиском  
✅ GameCard с бейджами и кнопками PLAY/DEMO  
✅ ReviewSeoSection с SEO-текстом  
✅ Полная локализация (20 языков)  
✅ Адаптивный дизайн для мобильных и десктопов  
✅ 40 слотов в списке  
✅ Интеграция всех компонентов на главную страницу  

## Следующие шаги

1. ✅ Главная страница завершена
2. ⏭️ Переход к странице обзора (`/review`)

