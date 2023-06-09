import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { sortByOrder } from "src/shared/lib/sort-by-order";

export const getDashboardState = (state: RootState) => state.dashboard

export const getDashbordList = createSelector(
  [getDashboardState],
  (dashboard) => [...dashboard.dashboardList].sort((a, b) => a.order - b.order)
);

// export const getTasksList = createSelector(
//   getDashboardState,
//   (dashboard) => dashboard.tasks
// );

export const getTasksListExt = (state: RootState, id: string) => {
  if (!state.dashboard.tasks[id]) {
    return []
  }
  return [...state.dashboard.tasks[id]].sort(sortByOrder)
}