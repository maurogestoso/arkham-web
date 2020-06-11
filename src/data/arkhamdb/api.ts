import fetch from "node-fetch";

const BASE_URL = "https://arkhamdb.com";

export function normalizeCardsByCode(cards: any) {
  return cards.reduce((acc: any, card: any) => {
    acc[card.code] = card;
    return acc;
  }, {});
}

export function fetchSet(setName: string) {
  return fetch(`${BASE_URL}/api/public/cards/${setName}`)
    .then((res) => res.json())
    .then((set) => {
      set.forEach((card) => {
        if (card.linked_card) {
          set.push(card.linked_card);
        }
      });
      return set;
    });
}

export function fetchImage(path: string) {
  return fetch(`${BASE_URL}${path}`).then((res) => res.buffer());
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
