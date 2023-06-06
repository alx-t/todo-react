import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { CounterSliceReducer } from "../entities/ui/counter/counter-slice";
import { EasyCounterSliceReducer } from "../entities/ui/easy-counter/easy-counter-slice";
import { HardCounterSliceReducer } from "../entities/ui/hard-counter/hard-counter-slice";
import { DasboardSliceReducer } from "../features/model/dashboard/dashboard-slice";

const rootReducer = combineReducers({
  counter: CounterSliceReducer,
  easyCounter: EasyCounterSliceReducer,
  hardCounter: HardCounterSliceReducer,
  dashboard: DasboardSliceReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
