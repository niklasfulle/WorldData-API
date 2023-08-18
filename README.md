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

| Name                          | Version  | Link                                                        |
| ----------------------------- | -------- | ----------------------------------------------------------- |
| @emotion/react                | ^11.10.6 | https://www.npmjs.com/package/@emotion/react                |
| @emotion/styled               | ^11.10.6 | https://www.npmjs.com/package/@emotion/styled               |
| @mui/material                 | ^5.11.11 | https://www.npmjs.com/package/@mui/material                 |
| @mui/system                   | ^5.11.11 | https://www.npmjs.com/package/@mui/system                   |
| @mui/x-data-grid              | ^6.0.0   | https://www.npmjs.com/package/@mui/x-data-grid              |
| @next-auth/prisma-adapter     | ^1.0.5   | https://www.npmjs.com/package/@next-auth/prisma-adapter     |
| @prisma/client                | 4.11.0   | https://www.npmjs.com/package/@prisma/client                |
| @radix-ui/react-dropdown-menu | ^2.0.3   | https://www.npmjs.com/package/@radix-ui/react-dropdown-menu |
| @radix-ui/react-scroll-area   | ^1.0.2   | https://www.npmjs.com/package/@radix-ui/react-scroll-area   |
| @radix-ui/react-tabs          | ^1.0.2   | https://www.npmjs.com/package/@radix-ui/react-tabs          |
| @total-typescript/ts-reset    | ^0.3.7   | https://www.npmjs.com/package/@total-typescript/ts-reset    |
| @types/bcrypt                 | ^5.0.0   | https://www.npmjs.com/package/@types/bcrypt                 |
| @types/nodemailer             | ^6.4.9   | https://www.npmjs.com/package/@types/nodemailer             |
| @types/three                  | ^0.155.0 | https://www.npmjs.com/package/@types/three                  |
| bcrypt                        | ^5.1.0   | https://www.npmjs.com/package/bcrypt                        |
| class-variance-authority      | ^0.4.0   | https://www.npmjs.com/package/class-variance-authority      |
| clsx                          | ^1.2.1   | https://www.npmjs.com/package/clsx                          |
| cookies-next                  | ^2.1.2   | https://www.npmjs.com/package/cookies-next                  |
| date-fns                      | ^2.29.3  | https://www.npmjs.com/package/date-fns                      |
| eslint                        | 8.35.0   | https://www.npmjs.com/package/eslint                        |
| eslint-config-next            | 13.2.3   | https://www.npmjs.com/package/eslint-config-next            |
| framer-motion                 | ^10.0.1  | https://www.npmjs.com/package/framer-motion                 |
| limiter                       | ^2.1.0   | https://www.npmjs.com/package/limiter                       |
| lodash                        | ^4.17.21 | https://www.npmjs.com/package/lodash                        |
| lucide-react                  | ^0.265.0 | https://www.npmjs.com/package/lucide-react                  |
| mongodb                       | ^5.7.0   | https://www.npmjs.com/package/mongodb                       |
| nanoid                        | ^4.0.1   | https://www.npmjs.com/package/nanoid                        |
| next                          | ^13.4.12 | https://www.npmjs.com/package/next                          |
| next-auth                     | ^4.23.0  | https://www.npmjs.com/package/next-auth                     |
| next-pwa                      | ^5.6.0   | https://www.npmjs.com/package/next-pwa                      |
| next-themes                   | ^0.2.1   | https://www.npmjs.com/package/next-themes                   |
| nodemailer                    | ^6.9.4   | https://www.npmjs.com/package/nodemailer                    |
| prism-react-renderer          | 1.3.5    | https://www.npmjs.com/package/prism-react-renderer          |
| prisma                        | 4.11.0   | https://www.npmjs.com/package/prisma                        |
| prismjs                       | ^1.29.0  | https://www.npmjs.com/package/prismjs                       |
| react                         | 18.2.0   | https://www.npmjs.com/package/react                         |
| react-dom                     | 18.2.0   | https://www.npmjs.com/package/react-dom                     |
| react-hook-form               | ^7.43.4  | https://www.npmjs.com/package/react-hook-form               |
| react-hot-toast               | ^2.4.1   | https://www.npmjs.com/package/react-hot-toast               |
| sharp                         | ^0.31.3  | https://www.npmjs.com/package/sharp                         |
| simplebar-react               | ^3.2.1   | https://www.npmjs.com/package/simplebar-react               |
| tailwind-merge                | ^1.10.0  | https://www.npmjs.com/package/tailwind-merge                |
| three                         | ^0.155.0 | https://www.npmjs.com/package/three                         |
| zod                           | ^3.21.0  | https://www.npmjs.com/package/zod                           |
| @tailwindcss/typography       | ^0.5.9   | https://www.npmjs.com/package/@tailwindcss/typography       |
| @types/node                   | ^18.14.6 | https://www.npmjs.com/package/@types/node                   |
| @types/react                  | ^18.0.28 | https://www.npmjs.com/package/@types/react                  |
| @types/react-dom              | ^18.0.11 | https://www.npmjs.com/package/@types/react-dom              |
| autoprefixer                  | ^10.4.13 | https://www.npmjs.com/package/autoprefixer                  |
| postcss                       | ^8.4.21  | https://www.npmjs.com/package/postcss                       |
| tailwindcss                   | ^3.3.3   | https://www.npmjs.com/package/tailwindcss                   |
| tailwindcss-animate           | ^1.0.5   | https://www.npmjs.com/package/tailwindcss-animate           |
| typescript                    | ^5.1.6   | https://www.npmjs.com/package/typescript                    |

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

This project is licensed under the Apache License - see the [LICENSE](LICENSE) file for details.
