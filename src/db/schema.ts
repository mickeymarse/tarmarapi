import { integer, sqliteTable, text, customType } from 'drizzle-orm/sqlite-core';

// Custom types
// const integerOrText = customType<{ data: number | string }>({
//   dataType: () => 'TEXT',
// });
// const stringArray = customType<{ data: string[]; driverData: string }>({
//   dataType: () => 'TEXT',
//   toDriver: (value: string[]): string => JSON.stringify(value),
//   fromDriver: (value: string): string[] => JSON.parse(value),
// });

export const tarots = sqliteTable('tarots', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(),
  rank: text('rank').notNull(),
  suit: text('suit'),
  element: text('element').notNull(),
  planet: text('planet'),
  sign: text('sign').notNull(),
  meaning: text('meaning').notNull(),
});

export type InsertTarot = typeof tarots.$inferInsert;
export type SelectTarot = typeof tarots.$inferSelect;
