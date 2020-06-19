import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../../data/cards";

interface PlayerState {
  deck: Card[];
  hand: Card[];
  discard: Card[];
}

export const initialState: PlayerState = {
  deck: [],
  hand: [],
  discard: [],
};

interface CardIdAction {
  payload: { id: string };
}

interface CardListAction {
  payload: { cards: Card[] };
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    loadDeck: {
      reducer: (state, action: CardListAction) => {
        state = { ...initialState, deck: action.payload.cards };
        return state;
      },
      prepare: (cards: Card[]) => ({ payload: { cards } }),
    },
    drawTopDeck: (state) => {
      if (!state.deck.length) return state;
      const top = state.deck.shift()!;
      state.hand.push(top);
      return state;
    },
    discardFromHand: {
      reducer: (state, action: CardIdAction) => {
        const i = state.hand.findIndex(({ id }) => id === action.payload.id);
        const [card] = state.hand.splice(i, 1);
        state.discard.unshift(card);
        return state;
      },
      prepare: (id: string) => ({ payload: { id } }),
    },
  },
});

export default playerSlice.reducer;
export const { actions } = playerSlice;
