import { Elysia } from 'elysia';
import { getAllTarots, getRandomTarot } from './scripts/tarot';

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .get('/tarots/all', async () => {
    const data = await getAllTarots();
    console.log(data);
    return data;
  })
  .get('/tarots/random', async () => {
    const data = await getRandomTarot();
    console.log(data);
    return data;
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
