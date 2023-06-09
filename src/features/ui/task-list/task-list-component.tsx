import React, { FC, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
// import { getTasksList, getTasksListExt } from '../../model/dashboard/dashboard-selectors';
import {  getTasksListExt } from '../../model/dashboard/dashboard-selectors';
import { createTaskForDashboardTC, getTasksForDashboardTC } from '../../model/dashboard/dashboard-thunk';
import { Task } from '../..';
import { EntityCreation } from '../../../shared';
import { ITaskListProps } from './task-list-types';

import {Space} from '@shturval/takelage-ui';

export const TaskListComponent: FC<ITaskListProps> = ({id}) => {
  const dispath = useAppDispatch()
  // const allTasksList = useAppSelector(getTasksList);
  const taskList = useAppSelector((state) => getTasksListExt(state, id));
  // const taskList = allTasksList[id] ?? [];

  useEffect(() => {
    dispath(getTasksForDashboardTC(id))
  }, [dispath, id])

  const taskListUi = taskList.map((task) => {
    return (
      <Space size='small' align={'vertical'}>
        <Task key={task.id} id={task.id} title={task.title} status={task.status} dashboardId={id} />
      </Space>
    )
  })

  const handleCreateTask = useCallback((title: string) => {
    dispath(createTaskForDashboardTC(id, title))
  }, [dispath, id]);

  return (
    <Space size={'middle'} direction={'vertical'}>
      < EntityCreation onEntityCreate={handleCreateTask}/>
      {taskListUi}
    </Space>
  )
}
