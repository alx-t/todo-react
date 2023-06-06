import React, { ChangeEvent, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { getDashbordListTC, createDashboardTC, deleteDashboardTC, updateTitleDashboardTC } from '../../model/dashboard/dashboard-thunk';
import { getDashbordList } from '../../model/dashboard/dashboard-selectors';
import { Dashboard } from '../..';

export const DashboardListComponent = () => {
  const dispath = useAppDispatch()
  const dashoardList = useAppSelector(getDashbordList)

  const [title, setTitle] = useState('')

  useEffect(() => {
    // срабатывает после отработки return
    dispath(getDashbordListTC())
  }, [dispath]) // чисто чтобы cra не ругался

  const handleCreateDashboard = () => {
    dispath(createDashboardTC(title))
    setTitle('')
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  };

  const dashboardListUi = dashoardList.map((dashboard) => 
    <Dashboard key={dashboard.id} id={dashboard.id} title={dashboard.title} addedDate={dashboard.addedDate} />
  );
  
  return (
    <div>
      <div>
        <input type='text' value={title} onChange={handleChangeTitle}/>
        <button onClick={handleCreateDashboard}>Add</button>
      </div>
      {dashboardListUi}
    </div>
  )
}