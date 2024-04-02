import { db } from '../db/db';
import * as schema from '../db/schema';

await db.insert(schema.tarots).values([
  {
    id: 0,
    name: 'The Fool',
    type: 'major arcana',
    rank: '0',
    suit: 'hearts',
    element: 'earth',
    sign: 'aries',
    meaning: 'love, rage',
  },
]);

console.log(`Seeding complete.`);
