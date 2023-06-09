import { IDashboard, ITask } from "../../../shared/types/types";

export interface IInitState {
  dashboardList: IDashboard[],
  tasks: Record<string, ITask[]>
}