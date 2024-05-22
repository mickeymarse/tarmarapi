import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import homepage from './homepage.ts';

import { getAllTarots, getRandomTarot } from './scripts/tarot';

const port = process.env.PORT;

const app = new Elysia()
  .use(html())
  .get(
    '/',
    ({ html }) =>
      `<html lang="en">
  <body style="margin: auto; padding-top: 5px; padding-bottom: 5px; width: min-content; background-color: #221C35; color: #B5CFED;">  
  ${homepage}
    </body>
    </html>`
  )
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
  .listen({ port } || 8080);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
