import { ITask } from "../../../shared/types/types"

export interface ISetTasksData {
  dashboardId: string
  tasks: ITask[]
}