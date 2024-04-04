// import { drizzle } from 'drizzle-orm/bun-sqlite';
// import { Database } from 'bun:sqlite';

// export const sqlite = new Database('sqlite.db');
// export const db = drizzle(sqlite);

import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client);
