// FIXME: Need to solve this migration issue
import { db } from './db';
import { migrate } from 'drizzle-orm/libsql/migrator';

(async () => {
  await migrate(db, { migrationsFolder: '../migrations' });
})();
