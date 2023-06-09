import {createSlice} from '@reduxjs/toolkit';
import { IInitState } from './auth-types';
import type {PayloadAction} from '@reduxjs/toolkit';
import { IUser } from 'src/entities/types/types';

export const initialState: IInitState = {
  user: {}
};

export const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {
      setMe: (state, action: PayloadAction<IUser>) => {
        state.user = action.payload
      },
      removeMe: (state) => {
        state.user = {}
      }
    }
});

export const {
  setMe,
  removeMe
} = AuthSlice.actions;

export const AuthSliceReducer = AuthSlice.reducer;