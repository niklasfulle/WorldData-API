# World Data API

## Table of Contents

- [Description](#description)
- [Dependencies](#dependencies)
- [Setup](#setup)
- [Data](#data)
  - [V1](#v1)
  - [V2](#v2)
  - [V3](#v3)

## Description

This is a API provider for world data. It is a RESTful API that uses JSON as its primary data format. The API can only be used with an API key. The API key is used to track API usage and to prevent abuse. It has also rate limiting to prevent abuse. The API is build with Next.js and used PostgreSQL as its database. As database schema is used Prisma. It will have data about continents, countries, cities, mountains, rivers, lakes, islands ans currencies. The API is still in development.

## Dependencies

| Name           | Version | Link                                                 |
| -------------- | ------- | ---------------------------------------------------- |
| Node.js        | 18.17.0 | [Link](https://nodejs.org/en/)                       |
| Typescript     | 5.1.6   | [Link](https://www.typescriptlang.org/)              |
| React          | 18.2.0  | [Link](https://reactjs.org/)                         |
| React-DOM      | 18.2.0  | [Link](https://reactjs.org/)                         |
| Tailwind CSS   | 3.3.3   | [Link](https://tailwindcss.com/)                     |
| tailwind-merge | 1.10.0  | [Link](https://www.npmjs.com/package/tailwind-merge) |
| clsx           | 1.2.1   | [Link](https://www.npmjs.com/package/clsx)           |
| Next.js        | 13.4.12 | [Link](https://nextjs.org/)                          |
| Next-auth      | 4.20.1  | [Link](https://next-auth.js.org/)                    |
| Prisma         | 3.6.0   | [Link](https://www.prisma.io/)                       |
| zod            | 3.21.0  | [Link](https://www.npmjs.com/package/zod)            |
| lodash         | 4.17.21 | [Link](https://lodash.com/)                          |
| date-fns       | 2.29.3  | [Link](https://date-fns.org/)                        |
| limitter       | 2.1.0   | [Link](https://www.npmjs.com/package/limiter)        |
| nanoId         | 4.0.1   | [Link](https://www.npmjs.com/package/nanoid)         |
| lucide-react   | 0.122.0 | [Link](https://www.npmjs.com/package/lucide-react)   |

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

# ------------------------
# Database
# ------------------------

DATABASE_URL=
```

## Data

### V1

- 7 Continents
- 195 Countries
- 100 biggest Cities

### V2

- 7 Continents
- 195 Countries
- 500 biggest Cities
- 108 highest Mountains
- 46 largest Lakes
- 159 longest Rivers
- 118 biggest Islands

### V3

- 7 Continents
- 195 Countries
- 1000 biggest Cities
- 108 highest Mountains
- 46 largest Lakes
- 159 longest Rivers
- 322 biggest Islands
- 180 Currencies
