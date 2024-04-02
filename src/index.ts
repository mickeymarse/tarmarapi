import { Elysia } from 'elysia';
import { db } from './db/db';
import { migrate } from 'drizzle-orm/libsql/migrator';

(async () => {
  await migrate(db, { migrationsFolder: Bun.resolveSync(__dirname, '../migrations') });
})();

const app = new Elysia().get('/', () => 'Hello Elysia').listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
