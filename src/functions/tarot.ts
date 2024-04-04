import { db } from '../db/db';
import { SelectTarot, tarots } from '../db/schema';

export async function getAllTarots(): Promise<Array<SelectTarot>> {
  return await db.select().from(tarots).all();
}
