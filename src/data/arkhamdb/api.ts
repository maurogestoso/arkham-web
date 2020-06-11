import fetch from "node-fetch";

const BASE_URL = "https://arkhamdb.com";

export function normalizeCardsByCode(cards: any) {
  return cards.reduce((acc: any, card: any) => {
    acc[card.code] = card;
    return acc;
  }, {});
}

export async function fetchSet(setName: string) {
  const res = await fetch(`${BASE_URL}/api/public/cards/${setName}`);
  const set = await res.json();
  set.forEach((card: any) => {
    if (card.linked_card) {
      set.push(card.linked_card);
    }
  });
  return set;
}

export async function fetchImage(path: string) {
  const res = await fetch(`${BASE_URL}${path}`);
  return await res.buffer();
}

export function fetchCardImages(cards: any, cb: any) {
  cards.forEach(async (card: any) => {
    try {
      const imgBuf = await fetchImage(card.imagesrc);
      cb(card.code, imgBuf);
      if (card.backimagesrc) {
        const imgBuf = await fetchImage(card.backimagesrc);
        cb(`${card.code}b`, imgBuf);
      }
    } catch (err) {
      console.log(err);
    }
  });
}
