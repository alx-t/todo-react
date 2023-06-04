import {createSlice} from '@reduxjs/toolkit';
import { IInitEasyCounterState } from './easy-counter-types';

export const initialEasyCounterState: IInitEasyCounterState = {
  easyCount: 0
};

export const EasyCounterSlice = createSlice({
    name: 'EasyCounterSlice',
    initialState: initialEasyCounterState,
    reducers: {
      increase: (state) => {
        state.easyCount += 1
      },
      decrease: (state) => {
        state.easyCount -= 1
      },
      reset: (state) => {
        state.easyCount = 0
      }
    }
});

export const {
  increase,
  decrease,
  reset
} = EasyCounterSlice.actions;

export const EasyCounterSliceReducer = EasyCounterSlice.reducer;
