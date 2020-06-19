import { createSlice } from "@reduxjs/toolkit";

interface CardViewerState {
  code: string;
}

const initialState = {
  code: "",
};

interface ActionSetCardViewer {
  payload: {
    code: "";
  };
}

const cardViewerSlice = createSlice({
  name: "cardViewer",
  initialState,
  reducers: {
    setCardViewer: {
      reducer: (state, action: ActionSetCardViewer) => {
        console.log("setCardViewer", { code: action.payload.code });
        state.code = action.payload.code;
        return state;
      },
      prepare: ({ code }) => ({ payload: { code } }),
    },
    clearCardViewer() {
      return { code: "" };
    },
  },
});

export default cardViewerSlice.reducer;
export const { actions } = cardViewerSlice;
