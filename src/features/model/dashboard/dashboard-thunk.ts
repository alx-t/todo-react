import { AppThunk } from "../../../store/store";
import { dashboardApi } from "../../api/dashboard/dashboard-api"
import { removeDashboardTasks, setDashboardList, setTasksForDashboard } from "./dashboard-slice";

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
      dispatch(removeDashboardTasks(id))
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

export const getTasksForDashboardTC = (dashboardId: string, page?: number, count?: number): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardApi.getTasksForDashboard(dashboardId, page, count);
    dispatch(setTasksForDashboard({
      dashboardId,
      tasks: res.data.items
    }))
  } catch (error) {
    alert(error)
  }
}

export const createTaskForDashboardTC = (dashboardId: string, title: string): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardApi.createTask(dashboardId, title);
    if (res.data.resultCode === 0) {
      dispatch(getTasksForDashboardTC(dashboardId))
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}

export const deleteTaskForDashboardTC = (dashboardId: string, taskId: string): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardApi.deleteTask(dashboardId, taskId);
    if (res.data.resultCode === 0) {
      dispatch(getTasksForDashboardTC(dashboardId))
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}

export const updateTaskTC = (dashboardId: string, taskId: string, title: string, status: boolean): AppThunk => async (dispatch) => {
  try {
    const res = await dashboardApi.updateTask(dashboardId, taskId, title, status);
    if (res.data.resultCode === 0) {
      dispatch(getTasksForDashboardTC(dashboardId))
    } else {
      alert(res.data.messages[0])
    }
  } catch (error) {
    alert(error)
  }
}
