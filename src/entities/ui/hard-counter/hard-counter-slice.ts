import {createSlice} from '@reduxjs/toolkit';
import { IInitHardCounterState } from './hard-counter-types';

export const initialHardCounterState: IInitHardCounterState = {
  hardCount: 0
};

export const HardCounterSlice = createSlice({
    name: 'HardCounterSlice',
    initialState: initialHardCounterState,
    reducers: {
      add10: (state) => {
        state.hardCount += 10
      },
      sub10: (state) => {
        state.hardCount -= 10
      },
      mul: (state) => {
        state.hardCount *= 2
      },
      div: (state) => {
        // if (state.hardCount === 0) {
        //   state.hardCount = state.hardCount
        // } else {
        //   state.hardCount = Math.round(state.hardCount / 2)
        // }
        if (state.hardCount !== 0) {
          state.hardCount = Math.round(state.hardCount / 2)
        }
      }
    }
});

export const {
  add10,
  sub10,
  mul,
  div
} = HardCounterSlice.actions;

export const HardCounterSliceReducer = HardCounterSlice.reducer;
