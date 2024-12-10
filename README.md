# EduConnect Frontend

EduConnect — это веб-платформа для студентов, преподавателей и работодателей, созданная с целью улучшения образовательного процесса и трудоустройства. Данный репозиторий содержит исходный код фронтенд-приложения.

## 🚀 Стек технологий

- **React**: Библиотека для создания пользовательского интерфейса.
- **TypeScript**: Для статической типизации.
- **Tailwind CSS**: Для стилизации компонентов.
- **Axios**: Для работы с API.
- **Socket.io-client**: Для реализации реального времени.
- **WebRTC**: Для видеоконференций.

---

## 📁 Структура проекта

src/
├── components/       # Повторно используемые компоненты
├── pages/            # Страницы приложения
├── styles/           # Глобальные стили
├── context/          # Управление состоянием через Context API
├── assets/           # Изображения и шрифты  
└── services/         # API-клиенты и взаимодействие с сервером


### 🗂️ Структура страниц

 **Главная страница** (`/`)
- **Приветственный баннер** с призывом к действию.  
- **Разделы с описанием функционала** платформы.  
- Ссылки на **регистрацию** и **вход**.


 **Регистрация** (`/register`)
- **Форма для создания учетной записи**, включая:  
  - Поля: Имя, Email, Пароль, Подтверждение пароля.  
  - **Выбор роли**: студент, преподаватель, работодатель.


 **Вход** (`/login`)
- **Форма для авторизации** (Email и Пароль).  
- Ссылки на **восстановление пароля** и **регистрацию**.


 **Дашборд** (`/dashboard`)
- **Приветствие** и основная информация.  
- Персонализированные разделы для каждой роли:  
  - **Студент**: Курсы, задания, прогресс.  
  - **Преподаватель**: Управление курсами и заданиями студентов.  
  - **Работодатель**: Управление вакансиями.


 **Курсы** (`/courses`)
- **Список курсов** с фильтрами и поиском.  
- **Детали курса**: лекции, задания, тесты.


 **Вакансии и стажировки** (`/jobs`)
- **Список вакансий**, фильтры и возможность отклика.  
- **Детальная информация о вакансии**.


 **Портфолио** (`/portfolio`)
- **Страница с достижениями** и проектами студента.  
- Возможность **добавления новых элементов**.


 **Профиль пользователя** (`/profile`)
- Управление **личными данными** и **настройками безопасности**.


 **Чаты** (`/chats`)
- **Список чатов**.  
- Окно чата с функцией **отправки сообщений** и **видеозвонков**.


 **Админ-панель** (`/admin`)
- **Управление пользователями**, курсами и вакансиями.  
- **Аналитика активности** пользователей.


 **404 и ошибки** (`/404`, `/error`)
- **Сообщения об ошибках** с кнопками возврата.
