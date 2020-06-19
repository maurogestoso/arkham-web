import player, { actions } from "./player";
import { Card } from "../../data/cards";

describe("loadDeck", () => {
  it("resets the player state to the initial state with the specified deck loaded", () => {
    const deck: Card[] = [
      { id: "1", code: "a" },
      { id: "2", code: "b" },
      { id: "3", code: "c" },
    ];
    const action = actions.loadDeck(deck);
    const state = player(
      {
        deck: [{ id: "3", code: "c" }],
        hand: [{ id: "1", code: "a" }],
        discard: [{ id: "2", code: "b" }],
      },
      action
    );

    expect(state.deck).toEqual(deck);
    expect(state.hand).toEqual([]);
    expect(state.discard).toEqual([]);
  });
});
