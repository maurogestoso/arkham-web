import { configureStore, combineReducers } from "@reduxjs/toolkit";

import gameReducer from "./state/game";

const rootReducer = combineReducers({ game: gameReducer });

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default store;
