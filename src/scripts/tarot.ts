import { db } from '../db/db';
import { SelectTarot, tarots } from '../db/schema';
// import { sql } from 'drizzle-orm';

export async function getAllTarots(): Promise<Array<SelectTarot>> {
  return await db.select().from(tarots).all();
}

export async function getRandomTarot(): Promise<Array<SelectTarot>> {
  const cards = await db.select().from(tarots);
  const randomCard = [cards[Math.floor(Math.random() * cards.length)]];
  return randomCard;
  // const randomRow = await db
  //   .select()
  //   .from(tarots)
  //   .orderBy(sql`RANDOM()`)
  //   .limit(1);

  // return randomRow;
}
