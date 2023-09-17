# Personal portfolio

## Installing dependencies and setup.

Once you've created a project and installed dependencies with

```bash
pnpm i
```

### Supabase

Also make sure you have the supabase CLI installed. If you don't, you can do so by running

```bash
brew install supabase/tap/supabase
```

Link the project with the right supabase project using

```bash
supabase link --project-ref [project-ref found in supabase URL]
```

### Vercel

Link to the vercel project using

```bash
vercel link
```

Then pull down the env variables using

```bash
vercel env pull .env
```

## Developing

Make sure docker is running and run

```bash
supabase start
```

to start the local supabase database. Existing migrations and `supabase/seed.sql` will be run on that database.
Then run

```bash
pnpm run dev
```

to start the local dev server.

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

## Migrations

If you need to change the schema of the database you can run

```bash
supabase migration new [migration_name]
```

to generate a new migration file.
Alternatively, you can use the Supabase Studio GUI on `https://localhost:54323/` to make changes to the local database and then generate a schema file based on the diff using

```bash
supabase db diff --use-migra -f [migration_name]
```
