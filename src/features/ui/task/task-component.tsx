import React, { FC, memo } from 'react';
import { deleteTaskForDashboardTC, updateTaskTC } from '../../model/dashboard/dashboard-thunk';
import { useAppDispatch } from '../../../shared/hooks/hooks';
import { EditableSpan } from '../../../shared';

import {IconButton, Space, Checkbox} from '@shturval/takelage-ui';
import { ITaskComponentProps } from './task-types';
// import { Checkbox } from 'antd';
// import { CheckboxChangeEvent } from 'antd/es/checkbox';

export const TaskComponent: FC<ITaskComponentProps> = memo(({id, title, status, dashboardId}) => {
  const dispath = useAppDispatch() 

  const handleDeleteTask = () =>{
    dispath(deleteTaskForDashboardTC(dashboardId, id))
  }

  const onUpdateValue = (title: string) => {
    dispath(updateTaskTC(dashboardId, id, title, status = status))
  }

  const onUpdateCompleted = (value: boolean) => {
    dispath(updateTaskTC(dashboardId, id, title, value))
  }

  return (
    <Space size={'small'} align={'center'}>
      <EditableSpan onUpdateValue={onUpdateValue}>{title}</EditableSpan>
      <Checkbox name={id} value={!!status} onChange={onUpdateCompleted} />
      <IconButton onClick={handleDeleteTask} title='Delete' iconName={'delete'} variant={'link'} />
    </Space>
  )
})
