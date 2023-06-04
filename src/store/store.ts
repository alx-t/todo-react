import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CounterSliceReducer } from "../entities/ui/counter/counter-slice";
import { EasyCounterSliceReducer } from "../entities/ui/easy-counter/easy-counter-slice";
import { HardCounterSliceReducer } from "../entities/ui/hard-counter/hard-counter-slice";

const rootReducer = combineReducers({
  counter: CounterSliceReducer,
  easyCounter: EasyCounterSliceReducer,
  hardCounter: HardCounterSliceReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof rootReducer>