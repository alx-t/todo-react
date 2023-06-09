import React, { FC, memo } from 'react';

import { formatRelative, subDays} from 'date-fns'
import { enGB } from 'date-fns/locale';

import { useAppDispatch } from '../../../shared/hooks/hooks';
import { deleteDashboardTC, updateTitleDashboardTC } from '../../model/dashboard/dashboard-thunk';
import { EditableSpan } from '../../../shared';
import { IDashboardProps } from './dashboard-types';
import { TaskList } from '../..';

import {IconButton, Title, Space, Panel} from '@shturval/takelage-ui';
import {Divider} from 'antd';

export const DashboardComponent: FC<IDashboardProps> = memo(({id, title, addedDate}) => {
  const dispath = useAppDispatch()

  // const date = format(new Date(addedDate), 'yy-MM-dd')
  const date = formatRelative(subDays(new Date(addedDate), 0), new Date(), {
    locale: enGB
  })

  const handleDeleteDashboard = () =>{
    dispath(deleteDashboardTC(id))
  }

  const onUpdateValue = (value: string) => {
    dispath(updateTitleDashboardTC(id, value))
  }

  return (
    <Panel>
      <Title>
        <Space align={'center'} size={'small'}>
          <IconButton onClick={handleDeleteDashboard} title='Delete' iconName={'delete'} variant={'link'} />
          <EditableSpan onUpdateValue={onUpdateValue}>{title}</EditableSpan>
        </Space>
      </Title>

      <TaskList id={id} />
      <Divider />
      <div>Created: {date}</div>
  </Panel>
  )
})