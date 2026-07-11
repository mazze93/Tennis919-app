# Tennis 919

**Tennis is for everyone.** Community platform for [Tennis 919](https://tennis-919.com), an inclusive tennis community in Durham, NC — events, clinics, merch, and a place to find your people on the court.

> Status: active development — core site and content in place, commerce and member features in progress.

## Stack

- **Frontend:** React 18 + TypeScript, Vite, Tailwind CSS, Radix UI (shadcn/ui)
- **Backend:** Express + TypeScript (`server/`), sessions via `express-session`
- **Database:** PostgreSQL (Neon serverless) with Drizzle ORM

## Development

```bash
npm install
npm run dev        # dev server (tsx, hot reload)
npm run check      # typecheck
npm run build      # production build (vite + esbuild)
npm run start      # serve the production build
npm run db:push    # push Drizzle schema to the database
```

Requires `DATABASE_URL` (PostgreSQL connection string) in the environment.

## Repo layout

- `client/` — React app
- `server/` — Express API and SSR entry points
- `shared/` — Drizzle schema and types shared across client/server
- `attached_assets/` — brand imagery and content used by the app (`@assets` alias)
- `docs/` — deployment notes

## License

[MIT](LICENSE) — pending merge of the license PR.
