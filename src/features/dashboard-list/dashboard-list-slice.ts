import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { IInitState } from './dashboard-list-types';
import { IDashboard } from '../../shared/types/types';

export const initialState: IInitState = {
  dashboardList: [],
  editedId: ''
};

export const DashboardSlice = createSlice({
    name: 'DashboardSlice',
    initialState,
    reducers: {
      setDashboardList: (state, action: PayloadAction<IDashboard[]>) => {
        state.dashboardList = action.payload
      },
      setEditedId: (state, action: PayloadAction<string>) => {
        state.editedId = action.payload
      }
    }
});

export const {
  setDashboardList,
  setEditedId
} = DashboardSlice.actions;

export const DasboardSliceReducer = DashboardSlice.reducer;