# TarMarAPI

## What is TarMarAPI

TarMarAPI stands for _**Tar**ot de **Mar**seille **API**_.  
It is a simple API to fetch essential data on the classic [Marseille cards](https://en.wikipedia.org/wiki/Tarot_of_Marseilles), and old deck/pattern that precedes the more common and known Rider-Waite Smith.

Although I partially moved away from it, I'm still very fond of it. I connect more deeply with any version of it than I've ever done with any RWS. But, like anything else, is a matter of choice, and I'm just offering one.

## Why making TarMarAPI

Although there are some very good tarot API ou there (which also inspired mine), none of them is dedicated to the Marseille deck. Moreover, most of them serve the card data following a way of seeing the card itself that doesn't align with my preference/style.

One thing, for example, is the reversed card meaning. I don't believe in that. I think every card has _x_ meanings within it independently from how they are picked from the deck. Then, it's up to the reader and the querent to weave a story based on the spread they're using. That's also linked to the fact that I don't believe in _negative meanings_ per se, but this will be the argument of a blog post perhaps.

## Onto the tech side

I've built this up using the new JS runtime [Bun](https://bun.sh/) together with the [ElysiaJS](https://elysiajs.com/) framework. The data rest in a [Turso](https://turso.tech/) edge SQLite database and requests are dealth with the help of [Drizzle ORM](https://orm.drizzle.team/).

Why using tech that is barely production ready?  
~~Because they all have cute mascots.~~  
Because they are all new, powerful and promising technology that pushed me to learn more about JS/TS while also having fun with them. Also, despite everything, they're delivering.

## Card sample

Example of data fetched from the API:

```json
[
  {
    "name": "Nine of Pentacles",
    "type": "minor arcana",
    "rank": "9",
    "suit": "pentacles",
    "element": "earth",
    "planet": "venus",
    "sign": ["virgo"],
    "meaning": ["luxury, self-sufficiency, independence"]
  }
]
```

## Usage

There are only two routes available so far and the data/cards will need some updates and reworking, but with some extra work, it can already be used for simple readings. I aim to update soon in order to avoid the needed extra work for the user.

### `GET` all [[try]](http://localhost:3000/tarots/all)

Fetch all the cards in the deck/db.

### `GET` random [[try]](http://localhost:3000/tarots/random)

Fetch one random card from the deck.

## Build

You can copy this repo locally and then run `bun install`.  
After that, you can follow the steps listed in [this tutorial](https://orm.drizzle.team/learn/tutorials/drizzle-with-turso) in order to setup your Turso db and Drizzle commands. They both use very useful and easy-to-use CLI.  
Finally, run `bun run dev` and you're good to go!

## Roadmap

- More `GET` requests.
- Improve and expand cards dataset.
- Improve README and HTML landing page.
- ...
