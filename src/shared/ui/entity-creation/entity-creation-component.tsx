import React, { ChangeEvent, FC, useState, memo } from 'react';
import { IEntityCreation } from './entity-creation-types';

import {Button, TextField, Space} from '@shturval/takelage-ui';

export const EntityCreationComponent: FC<IEntityCreation> = memo(({onEntityCreate}) => {
  const [title, setTitle] = useState('')

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  };

  const handleCreateEntity = () => {
    onEntityCreate(title)
    setTitle('')
  };

  return (
    <Space size={'small'}>
      <TextField
          type="text"
          componentSize="small"
          hasError={false}
          disabled={false}
          readOnly={false}
          placeholder="Введите текст"
          onChange={handleChangeTitle}
          value={title}
      />
      <Button onClick={handleCreateEntity} title='Add' size='large' iconName={'plus'} variant={'outline'} />
    </Space>
  )
})