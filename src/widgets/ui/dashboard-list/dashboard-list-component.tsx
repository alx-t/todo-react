import React, { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { getDashbordListTC, createDashboardTC } from '../../../features/model/dashboard/dashboard-thunk';
import { getDashbordList } from '../../../features/model/dashboard/dashboard-selectors';
import { Dashboard } from '../../../features';
import { EntityCreation } from '../../../shared';

import {Space, Panel, Title} from '@shturval/takelage-ui';
import {Row, Col} from 'antd';

import styles from './dashboard-list.module.css';

export const DashboardListComponent = () => {
  const dispath = useAppDispatch()
  const dashoardList = useAppSelector(getDashbordList)

  useEffect(() => {
    // срабатывает после отработки return
    dispath(getDashbordListTC())
  }, [dispath]) // чисто чтобы cra не ругался

  const handleCreateDashboard = useCallback((title: string) => {
    dispath(createDashboardTC(title))
  }, [dispath]);

  const dashboardListUi = dashoardList.map((dashboard) => 
    <Col span={6} key={dashboard.id}>
      <Dashboard key={dashboard.id} id={dashboard.id} title={dashboard.title} addedDate={dashboard.addedDate} />
    </Col>
  );
  
  return (
    <Space size={'extra'} direction={'vertical'}>
      <Panel className={styles.topPanel}>
        <Title>TODO List</Title>
        Create new Dashboard
        <EntityCreation onEntityCreate={handleCreateDashboard}/>
      </Panel>
      <Row gutter={[16, 16]}>
        {dashboardListUi}
      </Row>
    </Space>

  )
}