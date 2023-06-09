import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { IInitState } from '../../../widgets/ui/dashboard-list/dashboard-list-types';
import { IDashboard } from '../../../shared/types/types';
import { ISetTasksData } from './dashboard-types';

export const initialState: IInitState = {
  dashboardList: [],
  tasks: {}
};

export const DashboardSlice = createSlice({
    name: 'DashboardSlice',
    initialState,
    reducers: {
      setDashboardList: (state, action: PayloadAction<IDashboard[]>) => {
        state.dashboardList = action.payload
      },
      setTasksForDashboard: (state, action: PayloadAction<ISetTasksData>) => {
        state.tasks[action.payload.dashboardId] = action.payload.tasks
      },
      removeDashboardTasks: (state, action: PayloadAction<string>) => {
        delete state.tasks[action.payload]
      }
    }
});

export const {
  setDashboardList,
  setTasksForDashboard,
  removeDashboardTasks,
} = DashboardSlice.actions;

export const DasboardSliceReducer = DashboardSlice.reducer;