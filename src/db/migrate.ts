// // FIXME: Need to solve this migration issue
// import { db } from './db';
// import { migrate } from 'drizzle-orm/libsql/migrator';

// (async () => {
//   await migrate(db, { migrationsFolder: '../migrations' });
// })();

import { migrate } from 'drizzle-orm/bun-sqlite/migrator';

import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);
await migrate(db, { migrationsFolder: './src/db/migrations' });
