import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const tarots = sqliteTable('tarots', {
  name: text('name').notNull().primaryKey(),
  type: text('type').notNull(),
  rank: text('rank').notNull(),
  suit: text('suit').notNull(),
  element: text('element').notNull(),
  planet: text('planet'),
  sign: text('sign', { mode: 'json' }),
  meaning: text('meaning', { mode: 'json' }).notNull(),
});

export type InsertTarot = typeof tarots.$inferInsert;
export type SelectTarot = typeof tarots.$inferSelect;
