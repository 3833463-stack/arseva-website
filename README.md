# ARSEVA

Премиальный интернет-магазин ARSEVA — техника для восстановления, массажа и ухода за телом.

## Стек

- Next.js 15 (App Router) + React 19
- TypeScript + Tailwind CSS
- Framer Motion

- Phosphor Icons
- Шрифты подключаются по CDN: Cabinet Grotesk, Plus Jakarta Sans, JetBrains Mono

## Установка и запуск

```powershell
npm install
npm run dev
```

Сайт откроется на http://localhost:3000

Команды:

- `npm run dev` — разработка
- `npm run build` — production-сборка
- `npm run start` — запуск собранного приложения
- `npm run typecheck` — проверка типов

## Структура

```
app/                  страницы (App Router)
  page.tsx            главная
  catalog/            каталог + фильтры
  products/[slug]/    карточка товара
  quiz/               подбор массажера
  b2b/                B2B-раздел
  about/              о бренде
  warranty/           гарантия
  delivery/           доставка и оплата
  faq/                FAQ
  contacts/           контакты + форма
  checkout/           оформление заказа
  legal/              политика, соглашение

components/
  layout/             Header, Footer, MobileMenu
  sections/           секции главной (Hero, BrandIntro, Categories, FeaturedProducts, QuizTeaser, WhyArseva, Reviews, WarrantyBlock, OzonSellerCTA, B2BBlock)
  product/            ProductCard
  forms/              ContactForm, Field
  ui/                 Button, Container, ProductVisual, Reveal

data/
  products.ts         каталог товаров (типизированный)
  nav.ts              навигация, ссылки на Ozon

lib/
  cn.ts               clsx + tailwind-merge
  format.ts           formatPrice
```

## Дизайн-система

Цветовая палитра в `tailwind.config.ts`:

- `bone` — молочные фоны (#FAF8F4 / #F7F4EF)
- `graphite` — графитовые секции (#0B0B0B → #2A2A2A)
- `champagne` — теплое золото / шампань (акцент)
- `steel` — холодный серебристый (вторичный акцент)
- `ink` — текст (глубокий графит, не чистый чёрный)

Типографика — Cabinet Grotesk (display), Plus Jakarta Sans (sans), JetBrains Mono (mono).
Шрифты подключены по CDN в `app/layout.tsx`.

## Ozon

Все продажи и коммуникация идут через Ozon. Ссылки на магазин и продавца — в `data/nav.ts` (`OZON_URL`, `OZON_SELLER_URL`).
Ozon-ссылки подключены к каждому товару в `data/products.ts` (`ozonUrl`, `ozonSellerUrl`, `ozonSellerChatUrl`).

## Куда расширять

- Подключить CRM / приём заявок: `components/forms/ContactForm.tsx` (placeholder submit) и `app/checkout/page.tsx`
- Подключить оплату: `app/checkout/page.tsx`
- Добавить товар: `data/products.ts` (новая запись + изображения в `public/`)
- Реальные фото: положить в `public/products/<slug>/...` и заменить `ProductVisual` в карточках на `next/image`
- Локализация: добавить i18n-роутинг (Next.js App Router supports it natively)
- Блог: создать `app/blog/[slug]`
- Личный кабинет: `app/account/`

## Юридическое

Тексты на сайте не содержат медицинских обещаний. Дисклеймер о консультации со специалистом — в футере и на странице товара.
