import { AppThunk } from "../../store/store";
import { dashboardApi } from "./dashboard-list-api"
import { setDashboardList } from "./dashboard-list-slice";

export const getDashbordListTC = (): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardApi.getDashbordList();
    dispatch(setDashboardList(res.data))
  } catch (error) {
    alert(error)
  }
}

export const createDashboardTC = (title: string): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardApi.createDashboard(title);
    if (res.data.resultCode === 0) {
      dispatch(getDashbordListTC())
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}

export const deleteDashboardTC = (id: string): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardApi.deleteDashboard(id);
    if (res.data.resultCode === 0) {
      dispatch(getDashbordListTC())
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}

export const updateTitleDashboardTC = (id: string, title: string): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardApi.updateTitleDashboard(id, title);
    if (res.data.resultCode === 0) {
      dispatch(getDashbordListTC())
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}