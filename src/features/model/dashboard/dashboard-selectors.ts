import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";

export const getDashboardState = (state: RootState) => state.dashboard

export const getDashbordList = createSelector(
  [getDashboardState],
  (dashboard) => [...dashboard.dashboardList].sort((a, b) => a.order - b.order)
);

export const getTasksList = createSelector(
  getDashboardState,
  (dashboard) => dashboard.tasks
);