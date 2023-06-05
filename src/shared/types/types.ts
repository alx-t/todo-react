export interface IDashboard {
  id: string;
  title: string;
  addedDate: string;
  order: number;
}

export interface IDashboardData {
  resultCode: number,
  messages: string[],
  data: {
    item: IDashboard
  }
}