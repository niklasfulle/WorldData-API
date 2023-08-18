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

| Name            | Version | Link                                                 |
| --------------- | ------- | ---------------------------------------------------- |
| Node.js         | 18.17.0 | [Link](https://nodejs.org/en/)                       |
| Typescript      | 5.1.6   | [Link](https://www.typescriptlang.org/)              |
| React           | 18.2.0  | [Link](https://reactjs.org/)                         |
| React-DOM       | 18.2.0  | [Link](https://reactjs.org/)                         |
| react-hot-toast | 2.4.1   | [Link](https://react-hot-toast.com/)                 |
| Tailwind CSS    | 3.3.3   | [Link](https://tailwindcss.com/)                     |
| tailwind-merge  | 1.10.0  | [Link](https://www.npmjs.com/package/tailwind-merge) |
| clsx            | 1.2.1   | [Link](https://www.npmjs.com/package/clsx)           |
| Next.js         | 13.4.12 | [Link](https://nextjs.org/)                          |
| Next-auth       | 4.23.0  | [Link](https://next-auth.js.org/)                    |
| Next-pwa        | 5.6.0   | [Link](https://www.npmjs.com/package/next-pwa)       |
| Prisma          | 3.6.0   | [Link](https://www.prisma.io/)                       |
| PostgreSQL      | 14.1    | [Link](https://www.postgresql.org/)                  |
| MongoDB         | 5.7.0   | [Link](https://www.mongodb.com/)                     |
| zod             | 3.21.0  | [Link](https://www.npmjs.com/package/zod)            |
| lodash          | 4.17.21 | [Link](https://lodash.com/)                          |
| date-fns        | 2.29.3  | [Link](https://date-fns.org/)                        |
| limitter        | 2.1.0   | [Link](https://www.npmjs.com/package/limiter)        |
| nanoId          | 4.0.1   | [Link](https://www.npmjs.com/package/nanoid)         |
| lucide-react    | 0.265.0 | [Link](https://www.npmjs.com/package/lucide-react)   |
| bcrypt          | 5.1.0   | [Link](https://www.npmjs.com/package/bcrypt)         |
| three           | 0.155.0 | [Link](https://www.npmjs.com/package/three)          |
| framer-motion   | 10.0.1  | [Link](https://www.npmjs.com/package/framer-motion)  |
| nodemailer      | 6.9.4   | [Link](https://nodemailer.com/about/)                |

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

### Documentation Page

### World Data Page

### Blog Page

### Rquest Api Key Page

### Dashboard Page

### Login Page

### Register Page

### Forgot Password Page

## License
