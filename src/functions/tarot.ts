import { db } from '../db/db';
import { InsertTarot, SelectTarot, tarots } from '../db/schema';

export async function getAllTarots(): Promise<Array<SelectTarot>> {
  return await db.select().from(tarots).all();
}

export async function insertTarot(data: InsertTarot): Promise<void> {
  await db.insert(tarots).values(data).returning().get();
}
