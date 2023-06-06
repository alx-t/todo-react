import { axiosInstance } from "../../../shared/api/axios"

import { IResponseData, IDashboardData, IDashboard, IGetTasksData } from "../../../shared/types/types"

export const dashboardApi = {
  /**
   * Get all todolists for authorized user
   */
  getDashbordList: () => axiosInstance.get<IDashboard[]>('/todo-lists'),

  /**
   * Create new todolist (max todolists count - 10)
   */
  createDashboard: (title: string) => axiosInstance.post<IResponseData<IDashboardData>>('/todo-lists', { title }),

  /**
   * Delete todolist
   * @param id 
   */
  deleteDashboard: (id: string) => axiosInstance.delete<IResponseData>(`/todo-lists/${id}`),

  /**
   * Update todolist title
   * @param id 
   * @param title 
   */
  updateTitleDashboard: (id: string, title: string) => axiosInstance.put<IResponseData>(`/todo-lists/${id}`, {title}),

  /**
   * Get portion of tasks for todolist
   * @param dashboardId  
   * @param page 
   * @param count 
   */
  getTasksForDashboard: (dashboardId: string, page: number = 1, count: number = 10) => axiosInstance.get<IGetTasksData>(
    `/todo-lists/${dashboardId}/tasks`, { params: {page, count}}
  ),

  /**
   * Create new task for concrete todolist (max tasks count - 100)
   * @param dashboardId 
   * @param title 
   */
  createTask: (dashboardId: string, title: string) => axiosInstance.post(`/todo-lists/${dashboardId}/tasks`, {title}),

  /**
   * Delete task
   * @param dashboardId 
   * @param taskId 
   */
  deleteTask: (dashboardId: string, taskId: string) => axiosInstance.delete(`/todo-lists/${dashboardId}/tasks/${taskId}`),
}