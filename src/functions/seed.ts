import { db } from '../db/db';
import * as schema from '../db/schema';

await db.delete(schema.tarots);

await db.insert(schema.tarots).values([
  {
    name: 'The Fool',
    type: 'major arcana',
    rank: '0',
    suit: '',
    element: 'air',
    planet: 'uranus',
    sign: '',
    meaning: ['spontaneity, new beginnings, free spirit'],
  },
  {
    name: 'The Magician',
    type: 'major arcana',
    rank: '1',
    suit: '',
    element: 'air',
    planet: 'mercury',
    sign: 'virgo',
    meaning: ['skill, action, manifestation'],
  },
  {
    name: 'The High Priestess',
    type: 'major arcana',
    rank: '2',
    suit: '',
    element: 'water',
    planet: 'moon',
    sign: ['pisces, cancer'],
    meaning: ['intuition, mystery, inner wisdom'],
  },
  {
    name: 'The Empress',
    type: 'major arcana',
    rank: '3',
    suit: '',
    element: 'earth',
    planet: 'venus',
    sign: ['taurus, libra'],
    meaning: ['fertility, abundance, nurturing'],
  },
  {
    name: 'The Emperor',
    type: 'major arcana',
    rank: '4',
    suit: '',
    element: 'fire',
    planet: 'mars',
    sign: ['aries'],
    meaning: ['authority, structure, discipline'],
  },
  {
    name: 'The Hierophant',
    type: 'major arcana',
    rank: '5',
    suit: '',
    element: 'earth',
    planet: 'venus',
    sign: ['taurus'],
    meaning: ['tradition, conformity, spiritual guidance'],
  },
  {
    name: 'The Lovers',
    type: 'major arcana',
    rank: '6',
    suit: '',
    element: 'air',
    planet: 'mercury',
    sign: ['gemini'],
    meaning: ['relationships, choices, harmony'],
  },
  {
    name: 'The Chariot',
    type: 'major arcana',
    rank: '7',
    suit: '',
    element: 'water',
    planet: 'moon',
    sign: ['cancer'],
    meaning: ['willpower, victory, control'],
  },
  {
    name: 'Justice',
    type: 'major arcana',
    rank: '8',
    suit: '',
    element: 'earth',
    planet: 'saturn',
    sign: ['libra'],
    meaning: ['balance, fairness, accountability'],
  },
  {
    name: 'The Hermit',
    type: 'major arcana',
    rank: '9',
    suit: '',
    element: 'earth',
    planet: 'mercury',
    sign: ['virgo'],
    meaning: ['introspection, wisdom, solitude'],
  },
  {
    name: 'Wheel of Fortune',
    type: 'major arcana',
    rank: '10',
    suit: '',
    element: 'fire',
    planet: 'jupiter',
    sign: ['sagittarius, pisces'],
    meaning: ['luck, cycles, fate'],
  },
  {
    name: 'Strength',
    type: 'major arcana',
    rank: '11',
    suit: '',
    element: 'fire',
    planet: 'sun',
    sign: ['leo'],
    meaning: ['courage, self-control, inner strength'],
  },
  {
    name: 'The Hanged Man',
    type: 'major arcana',
    rank: '12',
    suit: '',
    element: 'water',
    planet: 'neptune',
    sign: ['pisces'],
    meaning: ['sacrifice, surrender, new perspective'],
  },
  {
    name: 'Death',
    type: 'major arcana',
    rank: '13',
    suit: '',
    element: 'water',
    planet: 'pluto',
    sign: ['scorpio'],
    meaning: ['transformation, endings, change'],
  },
  {
    name: 'Temperance',
    type: 'major arcana',
    rank: '14',
    suit: '',
    element: 'fire',
    planet: 'jupiter',
    sign: ['sagittarius'],
    meaning: ['balance, moderation, patience'],
  },
  {
    name: 'The Devil',
    type: 'major arcana',
    rank: '15',
    suit: '',
    element: 'earth',
    planet: 'saturn',
    sign: ['capricorn'],
    meaning: ['temptation, materialism, addiction'],
  },
  {
    name: 'The Tower',
    type: 'major arcana',
    rank: '16',
    suit: '',
    element: 'fire',
    planet: 'mars',
    sign: ['scorpio'],
    meaning: ['upheaval, sudden change, destruction'],
  },
  {
    name: 'The Star',
    type: 'major arcana',
    rank: '17',
    suit: '',
    element: 'air',
    planet: 'saturn',
    sign: ['aquarius'],
    meaning: ['hope, inspiration, renewal'],
  },
  {
    name: 'The Moon',
    type: 'major arcana',
    rank: '18',
    suit: '',
    element: 'water',
    planet: 'moon',
    sign: ['pisces'],
    meaning: ['illusion, intuition, subconscious'],
  },
  {
    name: 'The Sun',
    type: 'major arcana',
    rank: '19',
    suit: '',
    element: 'fire',
    planet: 'sun',
    sign: ['leo'],
    meaning: ['vitality, joy, success'],
  },
  {
    name: 'Judgement',
    type: 'major arcana',
    rank: '20',
    suit: '',
    element: 'fire',
    planet: 'pluto',
    sign: ['scorpio'],
    meaning: ['rebirth, awakening, inner calling'],
  },
  {
    name: 'The World',
    type: 'major arcana',
    rank: '21',
    suit: '',
    element: 'earth',
    planet: 'saturn',
    sign: ['capricorn'],
    meaning: ['completion, wholeness, success'],
  },
  {
    name: 'Ace of Wands',
    type: 'minor arcana',
    rank: '1',
    suit: 'wands',
    element: 'fire',
    planet: '',
    sign: ['aries', 'leo', 'sagittarius'],
    meaning: ['inspiration, new beginnings, creativity'],
  },
  {
    name: 'Two of Wands',
    type: 'minor arcana',
    rank: '2',
    suit: 'wands',
    element: 'fire',
    planet: 'mars',
    sign: ['aries'],
    meaning: ['planning, foresight, power'],
  },
  {
    name: 'Three of Wands',
    type: 'minor arcana',
    rank: '3',
    suit: 'wands',
    element: 'fire',
    planet: 'sun',
    sign: ['aries'],
    meaning: ['expansion, progress, success'],
  },
  {
    name: 'Four of Wands',
    type: 'minor arcana',
    rank: '4',
    suit: 'wands',
    element: 'fire',
    planet: 'venus',
    sign: ['aries'],
    meaning: ['celebration, community, stability'],
  },
  {
    name: 'Five of Wands',
    type: 'minor arcana',
    rank: '5',
    suit: 'wands',
    element: 'fire',
    planet: 'saturn',
    sign: ['leo'],
    meaning: ['conflict, competition, struggle'],
  },
  {
    name: 'Six of Wands',
    type: 'minor arcana',
    rank: '6',
    suit: 'wands',
    element: 'fire',
    planet: 'jupiter',
    sign: ['leo'],
    meaning: ['victory, recognition, success'],
  },
  {
    name: 'Seven of Wands',
    type: 'minor arcana',
    rank: '7',
    suit: 'wands',
    element: 'fire',
    planet: 'mars',
    sign: ['leo'],
    meaning: ['courage, defense, perseverance'],
  },
  {
    name: 'Eight of Wands',
    type: 'minor arcana',
    rank: '8',
    suit: 'wands',
    element: 'fire',
    planet: 'mercury',
    sign: ['sagittarius'],
    meaning: ['swiftness, action, communication'],
  },
  {
    name: 'Nine of Wands',
    type: 'minor arcana',
    rank: '9',
    suit: 'wands',
    element: 'fire',
    planet: 'moon',
    sign: ['sagittarius'],
    meaning: ['resilience, perseverance, defense'],
  },
  {
    name: 'Ten of Wands',
    type: 'minor arcana',
    rank: '10',
    suit: 'wands',
    element: 'fire',
    planet: 'saturn',
    sign: ['sagittarius'],
    meaning: ['burden, overwork, responsibility'],
  },
  {
    name: 'Page of Wands',
    type: 'court cards',
    rank: 'page',
    suit: 'wands',
    element: 'fire',
    planet: '',
    sign: [],
    meaning: ['enthusiasm, new ideas, exploration'],
  },
  {
    name: 'Knight of Wands',
    type: 'court cards',
    rank: 'knight',
    suit: 'wands',
    element: 'fire',
    planet: '',
    sign: ['leo'],
    meaning: ['passion, impulsiveness, adventure'],
  },
  {
    name: 'Queen of Wands',
    type: 'court cards',
    rank: 'queen',
    suit: 'wands',
    element: 'fire',
    planet: '',
    sign: ['aries'],
    meaning: ['confidence, creativity, independence'],
  },
  {
    name: 'King of Wands',
    type: 'court cards',
    rank: 'king',
    suit: 'wands',
    element: 'fire',
    planet: '',
    sign: ['sagittarius'],
    meaning: ['leadership, vision, entrepreneurship'],
  },
  {
    name: 'Ace of Cups',
    type: 'minor arcana',
    rank: '1',
    suit: 'cups',
    element: 'water',
    planet: '',
    sign: ['cancer', 'scorpio', 'pisces'],
    meaning: ['emotional fulfillment, love, intuition'],
  },
  {
    name: 'Two of Cups',
    type: 'minor arcana',
    rank: '2',
    suit: 'cups',
    element: 'water',
    planet: 'venus',
    sign: ['cancer'],
    meaning: ['partnership, connection, attraction'],
  },
  {
    name: 'Three of Cups',
    type: 'minor arcana',
    rank: '3',
    suit: 'cups',
    element: 'water',
    planet: 'mercury',
    sign: ['cancer'],
    meaning: ['celebration, community, joy'],
  },
  {
    name: 'Four of Cups',
    type: 'minor arcana',
    rank: '4',
    suit: 'cups',
    element: 'water',
    planet: 'moon',
    sign: ['cancer'],
    meaning: ['apathy, boredom, introspection'],
  },
  {
    name: 'Five of Cups',
    type: 'minor arcana',
    rank: '5',
    suit: 'cups',
    element: 'water',
    planet: 'mars',
    sign: ['scorpio'],
    meaning: ['loss, regret, disappointment'],
  },
  {
    name: 'Six of Cups',
    type: 'minor arcana',
    rank: '6',
    suit: 'cups',
    element: 'water',
    planet: 'sun',
    sign: ['scorpio'],
    meaning: ['nostalgia, innocence, childhood'],
  },
  {
    name: 'Seven of Cups',
    type: 'minor arcana',
    rank: '7',
    suit: 'cups',
    element: 'water',
    planet: 'venus',
    sign: ['scorpio'],
    meaning: ['illusion, fantasy, choices'],
  },
  {
    name: 'Eight of Cups',
    type: 'minor arcana',
    rank: '8',
    suit: 'cups',
    element: 'water',
    planet: 'saturn',
    sign: ['pisces'],
    meaning: ['abandonment, withdrawal, disillusionment'],
  },
  {
    name: 'Nine of Cups',
    type: 'minor arcana',
    rank: '9',
    suit: 'cups',
    element: 'water',
    planet: 'jupiter',
    sign: ['pisces'],
    meaning: ['satisfaction, contentment, wish fulfillment'],
  },
  {
    name: 'Ten of Cups',
    type: 'minor arcana',
    rank: '10',
    suit: 'cups',
    element: 'water',
    planet: 'mars',
    sign: ['pisces'],
    meaning: ['harmony, emotional fulfillment, family'],
  },
  {
    name: 'Page of Cups',
    type: 'court cards',
    rank: 'page',
    suit: 'cups',
    element: 'water',
    planet: '',
    sign: [],
    meaning: ['sensitivity, imagination, new emotions'],
  },
  {
    name: 'Knight of Cups',
    type: 'court cards',
    rank: 'knight',
    suit: 'cups',
    element: 'water',
    planet: '',
    sign: ['scorpio'],
    meaning: ['romanticism, creativity, daydreaming'],
  },
  {
    name: 'Queen of Cups',
    type: 'court cards',
    rank: 'queen',
    suit: 'cups',
    element: 'water',
    planet: 'moon',
    sign: ['cancer'],
    meaning: ['empathy, intuition, emotional intelligence'],
  },
  {
    name: 'King of Cups',
    type: 'court cards',
    rank: 'king',
    suit: 'cups',
    element: 'water',
    planet: '',
    sign: ['pisces'],
    meaning: ['emotional maturity, compassion, diplomacy'],
  },
  {
    name: 'Ace of Swords',
    type: 'minor arcana',
    rank: '1',
    suit: 'swords',
    element: 'air',
    planet: '',
    sign: ['libra', 'aquarius', 'gemini'],
    meaning: ['clarity, truth, new ideas'],
  },
  {
    name: 'Two of Swords',
    type: 'minor arcana',
    rank: '2',
    suit: 'swords',
    element: 'air',
    planet: 'moon',
    sign: ['libra'],
    meaning: ['indecision, stalemate, avoidance'],
  },
  {
    name: 'Three of Swords',
    type: 'minor arcana',
    rank: '3',
    suit: 'swords',
    element: 'air',
    planet: 'saturn',
    sign: ['libra'],
    meaning: ['heartbreak, sorrow, betrayal'],
  },
  {
    name: 'Four of Swords',
    type: 'minor arcana',
    rank: '4',
    suit: 'swords',
    element: 'air',
    planet: 'jupiter',
    sign: ['libra'],
    meaning: ['rest, retreat, contemplation'],
  },
  {
    name: 'Five of Swords',
    type: 'minor arcana',
    rank: '5',
    suit: 'swords',
    element: 'air',
    planet: 'venus',
    sign: ['aquarius'],
    meaning: ['conflict, defeat, resentment'],
  },
  {
    name: 'Six of Swords',
    type: 'minor arcana',
    rank: '6',
    suit: 'swords',
    element: 'air',
    planet: 'mercury',
    sign: ['aquarius'],
    meaning: ['transition, movement, journey, leaving difficulties behind'],
  },
  {
    name: 'Seven of Swords',
    type: 'minor arcana',
    rank: '7',
    suit: 'swords',
    element: 'air',
    planet: 'moon',
    sign: ['aquarius'],
    meaning: ['cunning, deception, strategy, escaping'],
  },
  {
    name: 'Eight of Swords',
    type: 'minor arcana',
    rank: '8',
    suit: 'swords',
    element: 'air',
    planet: 'jupiter',
    sign: ['gemini'],
    meaning: ['restriction, entrapment, helplessness, self-imposed limitations'],
  },
  {
    name: 'Nine of Swords',
    type: 'minor arcana',
    rank: '9',
    suit: 'swords',
    element: 'air',
    planet: 'mars',
    sign: ['gemini'],
    meaning: ['anxiety, nightmares, depression, suffering'],
  },
  {
    name: 'Ten of Swords',
    type: 'minor arcana',
    rank: '10',
    suit: 'swords',
    element: 'air',
    planet: 'sun',
    sign: ['gemini'],
    meaning: ['defeat, betrayal, ending, rock bottom'],
  },
  {
    name: 'Page of Swords',
    type: 'court cards',
    rank: 'page',
    suit: 'swords',
    element: 'air',
    planet: '',
    sign: [],
    meaning: ['curiosity, intellect, communication, vigilance'],
  },
  {
    name: 'Knight of Swords',
    type: 'court cards',
    rank: 'knight',
    suit: 'swords',
    element: 'air',
    planet: '',
    sign: ['aquarius'],
    meaning: ['action, aggression, speed, impulsiveness'],
  },
  {
    name: 'Queen of Swords',
    type: 'court cards',
    rank: 'queen',
    suit: 'swords',
    element: 'air',
    planet: '',
    sign: ['libra'],
    meaning: ['objectivity, independence, intellect, discernment'],
  },
  {
    name: 'King of Swords',
    type: 'court cards',
    rank: 'king',
    suit: 'swords',
    element: 'air',
    planet: '',
    sign: ['gemini'],
    meaning: ['authority, logic, justice, decisiveness'],
  },
  {
    name: 'Ace of Pentacles',
    type: 'minor arcana',
    rank: '1',
    suit: 'pentacles',
    element: 'earth',
    planet: '',
    sign: ['taurus', 'virgo', 'capricorn'],
    meaning: ['manifestation, prosperity, security, grounding'],
  },
  {
    name: 'Two of Pentacles',
    type: 'minor arcana',
    rank: '2',
    suit: 'pentacles',
    element: 'earth',
    planet: 'jupiter',
    sign: ['capricorn'],
    meaning: ['balance, duality, adaptability, juggling'],
  },
  {
    name: 'Three of Pentacles',
    type: 'minor arcana',
    rank: '3',
    suit: 'pentacles',
    element: 'earth',
    planet: 'mars',
    sign: ['capricorn'],
    meaning: ['skill, craftsmanship, collaboration, teamwork'],
  },
  {
    name: 'Four of Pentacles',
    type: 'minor arcana',
    rank: '4',
    suit: 'pentacles',
    element: 'earth',
    planet: 'sun',
    sign: ['capricorn'],
    meaning: ['greed, miserliness, possessiveness, stinginess'],
  },
  {
    name: 'Five of Pentacles',
    type: 'minor arcana',
    rank: '5',
    suit: 'pentacles',
    element: 'earth',
    planet: 'mercury',
    sign: ['taurus'],
    meaning: ['hardship, poverty, loss, isolation'],
  },
  {
    name: 'Six of Pentacles',
    type: 'minor arcana',
    rank: '6',
    suit: 'pentacles',
    element: 'earth',
    planet: 'moon',
    sign: ['taurus'],
    meaning: ['generosity, charity, sharing, philanthropy'],
  },
  {
    name: 'Seven of Pentacles',
    type: 'minor arcana',
    rank: '7',
    suit: 'pentacles',
    element: 'earth',
    planet: 'saturn',
    sign: ['taurus'],
    meaning: ['patience, perseverance, investment, planning'],
  },
  {
    name: 'Eight of Pentacles',
    type: 'minor arcana',
    rank: '8',
    suit: 'pentacles',
    element: 'earth',
    planet: 'sun',
    sign: ['virgo'],
    meaning: ['apprenticeship, skill, diligence, work'],
  },
  {
    name: 'Nine of Pentacles',
    type: 'minor arcana',
    rank: '9',
    suit: 'pentacles',
    element: 'earth',
    planet: 'venus',
    sign: ['virgo'],
    meaning: ['luxury, self-sufficiency, independence'],
  },
  {
    name: 'Ten of Pentacles',
    type: 'minor arcana',
    rank: '10',
    suit: 'pentacles',
    element: 'earth',
    planet: 'mercury',
    sign: ['virgo'],
    meaning: ['wealth, family, legacy, tradition'],
  },
  {
    name: 'Page of Pentacles',
    type: 'court cards',
    rank: 'page',
    suit: 'pentacles',
    element: 'earth',
    planet: '',
    sign: [],
    meaning: ['practicality, resourcefulness, new opportunities'],
  },
  {
    name: 'Knight of Pentacles',
    type: 'court cards',
    rank: 'knight',
    suit: 'pentacles',
    element: 'earth',
    planet: '',
    sign: ['taurus'],
    meaning: ['patience, persistence, reliability, responsibility'],
  },
  {
    name: 'Queen of Pentacles',
    type: 'court cards',
    rank: 'queen',
    suit: 'pentacles',
    element: 'earth',
    planet: '',
    sign: ['capricorn'],
    meaning: ['nurturing, abundance, sensuality, practicality'],
  },
  {
    name: 'King of Pentacles',
    type: 'court cards',
    rank: 'king',
    suit: 'pentacles',
    element: 'earth',
    planet: '',
    sign: ['virgo'],
    meaning: ['prosperity, authority, business acumen, materialism'],
  },
]);

console.log(`Seeding complete.`);
