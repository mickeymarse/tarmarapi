// import { migrate } from 'drizzle-orm/bun-sqlite/migrator';
// import { drizzle } from 'drizzle-orm/bun-sqlite';
// import { Database } from 'bun:sqlite';

// const sqlite = new Database('sqlite.db');
// const db = drizzle(sqlite);

import { db } from './db';
import { migrate } from 'drizzle-orm/libsql/migrator';

await migrate(db, {
  migrationsFolder: './src/db/migrations',
});
