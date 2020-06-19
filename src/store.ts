import { configureStore, combineReducers } from "@reduxjs/toolkit";

import gameReducer from "./state/game";
import uiReducer from "./state/ui";

const rootReducer = combineReducers({ game: gameReducer, ui: uiReducer });

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default store;
