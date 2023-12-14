![Logo of the project](https://raw.githubusercontent.com/reluctantfuturist/nextjs-sourdough-starter/master/logo.png)

# Next.js Sourdough Starter

A starter template for a Next.js app heavily based on [shadcn](https://twitter.com/shadcn)'s [Taxonomy](https://github.com/shadcn/taxonomy) project. Package upgrades across the board, adding Google auth provider, testing with Playwright and overall templatization. 

## Installing / Getting started

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm run dev
```

## Features

- New /app dir
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Route handlers
- Metadata files
- Server and Client Components
- API Routes and Middlewares
- Authentication using NextAuth.js
- ORM using Prisma
- Database on Supabase
- UI Components built using Radix UI
- Documentation and blog using MDX and Contentlayer
- Subscriptions using Stripe
- Styled using Tailwind CSS
- Validations using Zod
- Written in TypeScript

## To Do
- Replace components with newer versions from [shadcn/ui](https://ui.shadcn.com/) (there are minor incompatibility issues with helper functions in lib/utils.ts)
- Add Facebook social login