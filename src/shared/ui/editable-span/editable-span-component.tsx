import React, { FC, useState, KeyboardEvent, ChangeEvent } from "react";

import { IEditableSpanProps } from "./editable-span-types";

export const EditableSpanComponent: FC<IEditableSpanProps> = ({children, onUpdateValue}) => {
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState(children)

  const handleEditMode = () => {
    setEditMode(true)
  }

  const handleBlur = () => {
    setEditMode(false)
    if (value) {
      onUpdateValue(value)
    } else {
      setValue(children)
    }
  }

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleBlur()
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <>
        {
          editMode
          ? <input value={value} onChange={handleChange} autoFocus onBlur={handleBlur} onKeyDown={handleEnter}/>
          : <span onDoubleClick={handleEditMode}>{value}</span>
        }
    </>
  )
}