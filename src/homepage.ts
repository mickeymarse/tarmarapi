const homepageHTML: string = `
<h1>TarMarAPI</h1>

<h2>What is TarMarAPI</h2>

<p>TarMarAPI stands for <em><strong>Tar</strong>ot de <strong>Mar</strong>seille <strong>API</strong></em>.</p>
<p>
  It is a simple API to fetch essential data on the classic <a style="color: #B5CFED; text-decoration-color: #B5CFED; font-weight: bold;" href="https://en.wikipedia.org/wiki/Tarot_of_Marseilles" target="_blank">Marseille cards</a>, and old deck/pattern that precedes the more common and known Rider-Waite Smith.
</p>

<p>
  Although I partially moved away from it, I'm still very fond of it. I connect more deeply with any
  version of it than I've ever done with any RWS. But, like anything else, is a matter of choice,
  and I'm just offering one.
</p>

<h2>Why making TarMarAPI</h2>

<p>
  Although there are some very good tarot API ou there (which also inspired mine), none of them is
  dedicated to the Marseille deck.
</p>
<p>
  Moreover, most of them serve the card data following a way of seeing the card itself that doesn't
  align with my preference/style.
</p>

<p>
  One thing, for example, is the reversed card meaning. I don't believe in that. I think every card
  has <i>x</i> meanings within it independently from how they are picked from the deck. Then, it's up to
  the reader and the querent to weave a story based on the spread they're using. That's also linked
  to the fact that I don't believe in <i>negative meanings</i> per se, but this will be the argument of a
  blog post perhaps.
</p>

<h2>Onto the tech side</h2>

<p>
  I've built this app using the new JS runtime
  <a style="color: #B5CFED; text-decoration-color: #B5CFED; font-weight: bold;" href="https://bun.sh/" target="_blank">Bun</a> together with the
  <a style="color: #B5CFED; text-decoration-color: #B5CFED; font-weight: bold;" href="https://elysiajs.com/" target="_blank">ElysiaJS</a> framework.
</p>
<p>
  The data rest in a <a style="color: #B5CFED; text-decoration-color: #B5CFED; font-weight: bold;" href="https://turso.tech/" target="_blank">Turso</a> edge SQLite
  database and requests are dealth with the help of <a style="color: #B5CFED; text-decoration-color: #B5CFED; font-weight: bold;" href="https://orm.drizzle.team/" target="_blank">Drizzle
  ORM</a>. The app is deployed using
  <a style="color: #B5CFED; text-decoration-color: #B5CFED; font-weight: bold;" href="https://fly.io/" target="_blank">Fly</a>.
</p>

<p>Why using tech that is barely production ready?</p>
<p><s>Because they all have cute mascots.</s></p>
<p>
  Because they are all new, powerful and promising technology that pushed me to learn more about
  JS/TS while also having fun with them. Also, despite everything, they're delivering.
</p>

<h2>Card sample</h2>

<p>Example of data fetched from the API:</p>

<pre> [ 
  { 
    "name": "Nine of Pentacles", 
    "type": "minor arcana", 
    "rank": "9", 
    "suit": "pentacles",
    "element": "earth",
    "planet": "venus",
    "sign": ["virgo"],
    "meaning": ["luxury, self-sufficiency,independence"] 
  } 
  ] </pre>

<h2>Usage</h2>

<p>
  There are only two routes available so far and the data/cards will need some updates and
  reworking, but with some extra work, it can already be used for simple readings. I aim to update
  soon in order to avoid the needed extra work for the user.
</p>

<h3> <code>GET /tarots/all</code> <a style="color: #B5CFED; text-decoration-color: #B5CFED; font-weight: bold;" href="https://tarmarapi.fly.dev/tarots/all" target="_blank"><small>[try]</small></a></h3>

<p>Fetch all the cards in the deck/db.</p>

<h3> <code>GET /tarots/random</code> <a style="color: #B5CFED; text-decoration-color: #B5CFED; font-weight: bold;" href="https://tarmarapi.fly.dev/tarots/random" target="_blank"><small>[try]</small></a></h3>

<p>Fetch one random card from the deck.</p>

<h2>Build</h2>

<p>You can copy this repo locally and then run <code>bun install</code>.</p>
<p>
  After that, you can follow the steps listed in <a style="color: #B5CFED; text-decoration-color: #B5CFED; font-weight: bold;" href="https://orm.drizzle.team/learn/tutorials/drizzle-with-turso" target="_blank">this
  tutorial</a> in order to setup your
  Turso db and Drizzle commands. They both use very useful and easy-to-use CLI.
</p>
<p>Finally, run <code>bun run dev</code> and you're good to go!</p>

<h2>Roadmap</h2>

<ol>
  <li>More <code>GET</code> requests.</li>
  <li>Improve and expand cards dataset.</li>
  <li>Improve README and HTML landing page.</li>
  <li>...</li>
</ol>
`;

export default homepageHTML;
