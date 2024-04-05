import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';

import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { read } from 'to-vfile';
import { unified } from 'unified';

import { getAllTarots, getRandomTarot } from './scripts/tarot';

const readme = await unified()
  .use(remarkParse)
  .use(remarkHtml)
  .process(await read('README.md'));

const port = process.env.PORT;

const app = new Elysia()
  .use(html())
  .get(
    '/',
    () =>
      `<html lang="en">
  <body>  
  ${readme}
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

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
