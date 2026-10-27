# Forum Client

Клиентская часть веб-сервиса (интернет-магазин/форум-платформа).  
Реализована на **React + TypeScript + Vite**.

## Стек

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) + [React Redux](https://react-redux.js.org/)
- [React Router](https://reactrouter.com/) v7
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [CSS Modules](https://css-tricks.com/css-modules-part-1-need/)
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/D1edDuck/forum_client.git
cd forum_client

# Установить зависимости
npm install

# Запуск dev-сервера
npm run dev

# Сборка
npm run build

# Предпросмотр сборки
npm run preview

# Линтинг
npm run lint

# Форматирование
npm run format
```

## Переменные окружения

Скопируйте `.env.example` в `.env` и при необходимости измените значения:

```bash
cp .env.example .env
```

Переменные:
- `VITE_API_URL` — базовый URL API (например, `http://localhost:5000/api`)
- `VITE_API_URL_IMAGE` — базовый URL для изображений (например, `http://localhost:5000`)

## Структура проекта

```text
forum_client/
├── public/        # Статические файлы
├── src/
│   ├── api/       # API-клиент и типы
│   ├── app/       # Конфигурация store, роутер, хуки
│   ├── assets/    # Ассеты
│   ├── components/# UI-компоненты
│   ├── features/  # Redux slices
│   ├── hooks/     # Кастомные хуки
│   ├── pages/     # Страницы
│   ├── store/     # Redux store
│   ├── styles/    # Глобальные стили
│   ├── UI/        # Базовые UI-компоненты
│   ├── utils/     # Утилиты
│   └── App.tsx
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Функционал

- Каталог товаров с поиском и фильтрацией
- Корзина и оформление заказа
- Личный кабинет пользователя
- Админка (управление товарами, категориями, заказами, пользователями)
- Страница ремонта
- Модальные окна, уведомления
- Адаптивная верстка

## Автор

- GitHub: [D1edDuck](https://github.com/D1edDuck]
