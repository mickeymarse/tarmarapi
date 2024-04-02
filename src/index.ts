import { Elysia } from 'elysia';
import { getAllTarots, insertTarot } from './functions/tarot';

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .get('/tarots', async () => {
    const data = await getAllTarots();
    console.log(data);
    return data;
  })
  // .post('/tarots', async ({ body }: any) => {
  //   const newTarot = await insertTarot(body);
  //   return newTarot;
  // })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
