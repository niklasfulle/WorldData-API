# World Data API

## Table of Contents

- [Description](#description)
- [Dependencies](#dependencies)
- [Setup](#setup)
- [API](#api)
- [Data](#data)
  - [V1](#v1)
  - [V2](#v2)
  - [V3](#v3)
  - [V4](#v4)
- [Pages](#pages)
  - [Home Page](#home-page)
  - [Documentation Page](#documentation-page)
  - [World Data Page](#world-data-page)
  - [Login Page](#login-page)
  - [Register Page](#register-page)
  - [Forgot Password Page](#forgot-password-page)
  - [Dashboard Page](#dashboard-page)
- [License](#license)

## Description

This is a API provider for world data. It is a RESTful API that uses JSON as its primary data format. The API can only be used with an API key. The API key is used to track API usage and to prevent abuse. It has also rate limiting to prevent abuse. The API is build with Next.js and used PostgreSQL as its database. As database schema is used Prisma. It will have data about continents, countries, cities, mountains, rivers, lakes, islands ans currencies. The API is still in development.

## Dependencies

| Name                          | tyTypepe | Version  | Link                                                        |
| ----------------------------- | -------- | -------- | ----------------------------------------------------------- |
| @emotion/react                | prod     | ^11.10.6 | https://www.npmjs.com/package/@emotion/react                |
| @emotion/styled               | prod     | ^11.10.6 | https://www.npmjs.com/package/@emotion/styled               |
| @mui/material                 | prod     | ^5.11.11 | https://www.npmjs.com/package/@mui/material                 |
| @mui/system                   | prod     | ^5.11.11 | https://www.npmjs.com/package/@mui/system                   |
| @mui/x-data-grid              | prod     | ^6.0.0   | https://www.npmjs.com/package/@mui/x-data-grid              |
| @next-auth/prisma-adapter     | prod     | ^1.0.5   | https://www.npmjs.com/package/@next-auth/prisma-adapter     |
| @prisma/client                | prod     | 4.11.0   | https://www.npmjs.com/package/@prisma/client                |
| @radix-ui/react-dropdown-menu | prod     | ^2.0.3   | https://www.npmjs.com/package/@radix-ui/react-dropdown-menu |
| @radix-ui/react-scroll-area   | prod     | ^1.0.2   | https://www.npmjs.com/package/@radix-ui/react-scroll-area   |
| @radix-ui/react-tabs          | prod     | ^1.0.2   | https://www.npmjs.com/package/@radix-ui/react-tabs          |
| @total-typescript/ts-reset    | prod     | ^0.3.7   | https://www.npmjs.com/package/@total-typescript/ts-reset    |
| @types/bcrypt                 | prod     | ^5.0.0   | https://www.npmjs.com/package/@types/bcrypt                 |
| @types/nodemailer             | prod     | ^6.4.9   | https://www.npmjs.com/package/@types/nodemailer             |
| @types/three                  | prod     | ^0.155.0 | https://www.npmjs.com/package/@types/three                  |
| bcrypt                        | prod     | ^5.1.0   | https://www.npmjs.com/package/bcrypt                        |
| class-variance-authority      | prod     | ^0.4.0   | https://www.npmjs.com/package/class-variance-authority      |
| clsx                          | prod     | ^1.2.1   | https://www.npmjs.com/package/clsx                          |
| cookies-next                  | prod     | ^2.1.2   | https://www.npmjs.com/package/cookies-next                  |
| date-fns                      | prod     | ^2.29.3  | https://www.npmjs.com/package/date-fns                      |
| eslint                        | prod     | 8.35.0   | https://www.npmjs.com/package/eslint                        |
| eslint-config-next            | prod     | 13.2.3   | https://www.npmjs.com/package/eslint-config-next            |
| framer-motion                 | prod     | ^10.0.1  | https://www.npmjs.com/package/framer-motion                 |
| limiter                       | prod     | ^2.1.0   | https://www.npmjs.com/package/limiter                       |
| lodash                        | prod     | ^4.17.21 | https://www.npmjs.com/package/lodash                        |
| lucide-react                  | prod     | ^0.265.0 | https://www.npmjs.com/package/lucide-react                  |
| mongodb                       | prod     | ^5.7.0   | https://www.npmjs.com/package/mongodb                       |
| nanoid                        | prod     | ^4.0.1   | https://www.npmjs.com/package/nanoid                        |
| next                          | prod     | ^13.4.12 | https://www.npmjs.com/package/next                          |
| next-auth                     | prod     | ^4.23.0  | https://www.npmjs.com/package/next-auth                     |
| next-pwa                      | prod     | ^5.6.0   | https://www.npmjs.com/package/next-pwa                      |
| next-themes                   | prod     | ^0.2.1   | https://www.npmjs.com/package/next-themes                   |
| nodemailer                    | prod     | ^6.9.4   | https://www.npmjs.com/package/nodemailer                    |
| prism-react-renderer          | prod     | 1.3.5    | https://www.npmjs.com/package/prism-react-renderer          |
| prisma                        | prod     | 4.11.0   | https://www.npmjs.com/package/prisma                        |
| prismjs                       | prod     | ^1.29.0  | https://www.npmjs.com/package/prismjs                       |
| react                         | prod     | 18.2.0   | https://www.npmjs.com/package/react                         |
| react-dom                     | prod     | 18.2.0   | https://www.npmjs.com/package/react-dom                     |
| react-hook-form               | prod     | ^7.43.4  | https://www.npmjs.com/package/react-hook-form               |
| react-hot-toast               | prod     | ^2.4.1   | https://www.npmjs.com/package/react-hot-toast               |
| sharp                         | prod     | ^0.31.3  | https://www.npmjs.com/package/sharp                         |
| simplebar-react               | prod     | ^3.2.1   | https://www.npmjs.com/package/simplebar-react               |
| tailwind-merge                | prod     | ^1.10.0  | https://www.npmjs.com/package/tailwind-merge                |
| three                         | prod     | ^0.155.0 | https://www.npmjs.com/package/three                         |
| zod                           | prod     | ^3.21.0  | https://www.npmjs.com/package/zod                           |
| @tailwindcss/typography       | dev      | ^0.5.9   | https://www.npmjs.com/package/@tailwindcss/typography       |
| @types/node                   | dev      | ^18.14.6 | https://www.npmjs.com/package/@types/node                   |
| @types/react                  | dev      | ^18.0.28 | https://www.npmjs.com/package/@types/react                  |
| @types/react-dom              | dev      | ^18.0.11 | https://www.npmjs.com/package/@types/react-dom              |
| autoprefixer                  | dev      | ^10.4.13 | https://www.npmjs.com/package/autoprefixer                  |
| postcss                       | dev      | ^8.4.21  | https://www.npmjs.com/package/postcss                       |
| tailwindcss                   | dev      | ^3.3.3   | https://www.npmjs.com/package/tailwindcss                   |
| tailwindcss-animate           | dev      | ^1.0.5   | https://www.npmjs.com/package/tailwindcss-animate           |
| typescript                    | dev      | ^5.1.6   | https://www.npmjs.com/package/typescript                    |

## Setup

.env.local

```env
# ------------------------
# NextAuth.js Configuration
# ------------------------

NEXTAUTH_SECRET=
NEXTAUTH_URL=

# ------------------------
# OAuth Providers
# ------------------------

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# ------------------------
# Database
# ------------------------

POSTGRESQL_URL=

MONGODB_URL=

# ------------------------
# Nodemalier
# ------------------------

NODEMAILER_PW=
NODEMAILER_EMAIL=
```

## API

## Data

### V1 (working on)

- 7 Continents
- 195 Countries
- 100 biggest Cities

### V2 (in the future)

- 7 Continents
- 195 Countries
- 500 biggest Cities
- 108 highest Mountains
- 46 largest Lakes

### V3 (in the future)

- 7 Continents
- 195 Countries
- 1000 biggest Cities
- 108 highest Mountains
- 46 largest Lakes
- 159 longest Rivers
- 322 biggest Islands

### V4 (maybe in the future)

- 7 Continents
- 195 Countries
- 1000 biggest Cities
- 108 highest Mountains
- 46 largest Lakes
- 159 longest Rivers
- 322 biggest Islands
- 180 Currencies
- Solar System

## Pages

### Home Page

![Home Page](/docs/imgs/Homepage.png)

### Documentation Page

![Documentation Page](/docs/imgs/Docs.png)

### World Data Page

![World Data Page](/docs/imgs/Data.png)

### Blog Page

### Rquest Api Key Page

![Rquest Api Key Page](/docs/imgs/Request-api-key.png)

### Dashboard Page

![Dashboard Page](/docs/imgs/Dashboard.png)

### Login Page

![Login Page](/docs/imgs/Login.png)

### Register Page

![Register Page](/docs/imgs/Register.png)

### Forgot Password Page

## License
