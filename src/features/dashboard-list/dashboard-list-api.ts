import { axiosInstance } from "../../shared/api/axios"

import { IDashboardData, IDashboard } from "../../shared/types/types"

export const dashboardApi = {
  /**
   * Get all todolists for authorized user
   */
  getDashbordList: () => axiosInstance.get<IDashboard[]>('/todo-lists'),

  /**
   * Create new todolist (max todolists count - 10)
   */
  createDashboard: (title: string) => axiosInstance.post<IDashboardData>('/todo-lists', { title }),

  /**
   * Delete todolist
   * @param id 
   */
  deleteDashboard: (id: string) => axiosInstance.delete<IDashboardData>(`/todo-lists/${id}`),

  /**
   * Update todolist title
   * @param id 
   * @param title 
   */
  updateTitleDashboard: (id: string, title: string) => axiosInstance.put<IDashboardData>(`/todo-lists/${id}`, {title})
}