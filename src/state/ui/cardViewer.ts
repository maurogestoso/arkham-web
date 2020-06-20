import { createSlice } from "@reduxjs/toolkit";

interface CardViewerState {
  selected: {
    code: string;
  };
  hover: {
    code: string;
  };
  code: string;
}

const initialState = {
  hover: {
    code: "",
  },
  selected: {
    code: "",
  },
};

interface ActionSetHover {
  payload: {
    code: "";
  };
}

interface ActionSetSelected {
  payload: {
    code: "";
  };
}

const cardViewerSlice = createSlice({
  name: "cardViewer",
  initialState,
  reducers: {
    setHover: {
      reducer: (state, action: ActionSetHover) => {
        console.log("setCardViewer", { code: action.payload.code });
        state.hover = { ...action.payload };
        return state;
      },
      prepare: ({ code }) => ({ payload: { code } }),
    },
    clearHover(state) {
      state.hover = { code: "" };
      return state;
    },
    setSelected: {
      reducer: (state, action: ActionSetSelected) => {
        state.selected = { ...action.payload };
      },
      prepare: ({ code }) => ({ payload: { code } }),
    },
    clearSelected(state) {
      state.selected = { code: "" };
      return state;
    },
  },
});

export default cardViewerSlice.reducer;
export const { actions } = cardViewerSlice;
