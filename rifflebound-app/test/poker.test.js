import test from 'node:test'
import assert from 'node:assert/strict'

import { cardValue, combinations, createDeck, identifyHand } from '../src/utils/poker.js'
import { findBestPlay, suggestBestShopJoker } from '../src/utils/ai.js'

const cards = (...entries) => entries.map(([rank, suit]) => ({ rank, suit, id: `${rank}${suit}` }))

test('creates a unique 52-card deck', () => {
  const deck = createDeck()
  assert.equal(deck.length, 52)
  assert.equal(new Set(deck.map(card => card.id)).size, 52)
})

test('recognizes ace-low and royal straight flushes', () => {
  const wheel = cards(['A', '♠'], ['2', '♠'], ['3', '♠'], ['4', '♠'], ['5', '♠'])
  const royal = cards(['10', '♥'], ['J', '♥'], ['Q', '♥'], ['K', '♥'], ['A', '♥'])
  assert.equal(identifyHand(wheel).name, '同花顺')
  assert.equal(identifyHand(royal).name, '同花顺')
})

test('scores face-card values and enumerates combinations', () => {
  assert.equal(cardValue('A'), 11)
  assert.equal(cardValue('K'), 10)
  assert.equal(combinations([1, 2, 3, 4], 2).length, 6)
})

test('assistant chooses the strongest available play', () => {
  const hand = cards(
    ['10', '♣'], ['J', '♣'], ['Q', '♣'], ['K', '♣'], ['A', '♣'],
    ['2', '♦'], ['4', '♥'], ['7', '♠'],
  )
  assert.deepEqual(findBestPlay(hand, []).map(card => card.id), ['10♣', 'J♣', 'Q♣', 'K♣', 'A♣'])
})

test('shop assistant falls back to the cheapest option without a hand', () => {
  const shop = [{ id: 'premium', price: 8 }, { id: 'value', price: 3 }]
  assert.equal(suggestBestShopJoker(shop, [], []), 'value')
})
