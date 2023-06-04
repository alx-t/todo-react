import {createSlice} from '@reduxjs/toolkit';
import { IInitState } from './counter-types';

import type {PayloadAction} from '@reduxjs/toolkit';

export const initialState: IInitState = {
  count: 110
};

export const CounterSlice = createSlice({
    name: 'CounterSlice',
    initialState,
    reducers: {
      addCount: (state) => {
        state.count += 1
      },
      subCount: (state) => {
        state.count += 1
      },
      add100Count: (state, action: PayloadAction<number>) => {
        state.count += action.payload
      }
    }
});

export const {
  addCount,
  subCount,
  add100Count
} = CounterSlice.actions;

export const CounterSliceReducer = CounterSlice.reducer;
