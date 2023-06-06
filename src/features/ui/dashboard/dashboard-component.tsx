import React, { ChangeEvent, FC, useState, useEffect } from 'react';
import {format} from 'date-fns';

import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { createTaskForDashboardTC, deleteDashboardTC, deleteTaskForDashboardTC, getTasksForDashboardTC, updateTitleDashboardTC } from '../../model/dashboard/dashboard-thunk';
import { EditableSpan } from '../../../shared';
import { IDashboardProps } from './dashboard-types';
import { getTasksList } from '../../model/dashboard/dashboard-selectors';

export const DashboardComponent: FC<IDashboardProps> = ({id, title, addedDate}) => {
  const dispath = useAppDispatch()
  const allTasksList = useAppSelector(getTasksList)
  const taskList = allTasksList[id] ?? []
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    dispath(getTasksForDashboardTC(id))
  }, [dispath])

  const taskListUi = taskList.map((task) => {
    const handleDeleteTask = () =>{
      dispath(deleteTaskForDashboardTC(id, task.id))
    }

    return (
      <div>
        <span>{task.title}</span>
        <input type="checkbox" checked={task.completed} />
        <button onClick={handleDeleteTask}>Delete</button>
      </div>
    )
  })

  const date = format(new Date(2014,1,14), 'yy-MM-dd')

  const handleDeleteDashboard = () =>{
    dispath(deleteDashboardTC(id))
  }

  const onUpdateValue = (value: string) => {
    dispath(updateTitleDashboardTC(id, value))
  }

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value)
  };

  const handleCreateTask = () => {
    dispath(createTaskForDashboardTC(id, newTitle))
    setNewTitle('')
  };

  return (
    <div>
      <h4>
        <EditableSpan onUpdateValue={onUpdateValue}>{title}</EditableSpan>
        <button onClick={handleDeleteDashboard}>Delete</button>
      </h4>

      <div>
        <div>
          <input type='text' value={newTitle} onChange={handleChangeTitle}/>
          <button onClick={handleCreateTask}>Add Task</button>
        </div>
        Tasks: {taskListUi}
      </div>

      <div>Created: {date}</div>
  </div>
  )
}