import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './migrations',
  driver: 'turso',
  dbCredentials: {
    url: Bun.env.TURSO_CONNECTION_URL!,
    authToken: Bun.env.TURSO_AUTH_TOKEN!,
  },
} satisfies Config;
