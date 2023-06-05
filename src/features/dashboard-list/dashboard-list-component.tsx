import React, { ChangeEvent, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks';
import { getDashbordListTC, createDashboardTC, deleteDashboardTC, updateTitleDashboardTC } from './dashboard-list-thunk';
import { getDashbordList } from './dashboard-list-selectors';
import { IDashboard } from '../../shared/types/types';
import { setEditedId } from './dashboard-list-slice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const EditTitleComponent = ({id, title}: IDashboard) => {
  const dispath = useAppDispatch()
  const [newTitle, setNewTitle] = useState(title)

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value)
  }

  const handleUpdateDashboard = (e: React.MouseEvent<HTMLButtonElement>, id: string) =>{
    dispath(updateTitleDashboardTC(id, newTitle))
    dispath(setEditedId(''))
  }

  return (
    <div>
      <input type='text' value={newTitle} onChange={handleChangeTitle}/>
      <button onClick={(e) => handleUpdateDashboard(e, id)}>Update</button>
    </div>
  )
}

export const DashboardListComponent = () => {
  const dispath = useAppDispatch()

  const dashoardList = useAppSelector(getDashbordList)
  const editedId = useSelector((state: RootState) => state.dashboard.editedId)

  const [title, setTitle] = useState('')

  useEffect(() => {
    // срабатывает после отработки return
    dispath(getDashbordListTC())
  }, [dispath]) // чисто чтобы cra не ругался

  const handleCreateDashboard = () => {
    dispath(createDashboardTC(title))
    setTitle('')
  }

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const handleDeleteDashboard = (e: React.MouseEvent<HTMLButtonElement>, id: string) =>{
    dispath(deleteDashboardTC(id))
  }

  const handleSetEditId = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    dispath(setEditedId(id))
  }

  const dashoardListUi = dashoardList.map((dashboard) => {
    let element

    if (dashboard.id === editedId) {
      element = <EditTitleComponent {...dashboard} />
    } else {
      element = (
        <div>
          <h4>{dashboard.title}</h4>
          <button onClick={(e) => handleSetEditId(e, dashboard.id)}>Edit</button>
        </div>
      )
    }
    return (
      <React.Fragment key={dashboard.id}>
        {element}
        <div>{dashboard.addedDate}</div>
        <button onClick={(e) => handleDeleteDashboard(e, dashboard.id)}>Delete</button>
      </React.Fragment >
    )
  })

  return (
    <div>
      DashboardComponent
      <div>
        <input type='text' value={title} onChange={handleChangeTitle}/>
        <button onClick={handleCreateDashboard}>Add</button>
      </div>
      {dashoardListUi}
    </div>
  )
}