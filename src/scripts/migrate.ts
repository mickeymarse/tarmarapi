import { db } from '../db/db';
import { migrate } from 'drizzle-orm/libsql/migrator';

await migrate(db, {
  migrationsFolder: './src/db/migrations',
});
