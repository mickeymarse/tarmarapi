import { db } from '../db/db';
import * as schema from '../db/schema';

await db.delete(schema.tarots);

await db.insert(schema.tarots).values([
  {
    name: 'The Fool',
    type: 'major arcana',
    rank: '0',
    suit: 'hearts',
    element: 'earth',
    planet: 'uranus',
    meaning: ['love', 'rage'],
  },
]);

console.log(`Seeding complete.`);
//FIXME: connection doesn't close
