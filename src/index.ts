import { Elysia } from 'elysia';
// FIXME: Need to solve this migration issue
// import { db } from './db/db';
// import { migrate } from 'drizzle-orm/libsql/migrator';

// (async () => {
//   await migrate(db, { migrationsFolder: Bun.resolveSync(import.meta.dir, '../migrations') });
// })();

const app = new Elysia().get('/', () => 'Hello Elysia').listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
