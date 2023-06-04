import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { addCount, add100Count, subCount } from './counter-slice';

export const CounterComponent = (() => {
  const dispath = useDispatch()
  const count = useSelector((state: RootState) => state.counter.count)
  // const count = useSelector((state: any) => {
  //   return state.counter.count
  // })

  const handleAddCounter = () => {
    dispath(addCount())
  }

  const handleSubCounter = () => {
    dispath(subCount())
  }

  const handleAdd100Counter = () => {
    dispath(add100Count(100))
  }

  return (
    <div>
      <h3>Counter</h3>
      <div>count: {count}</div>
      <button onClick={handleAddCounter}>Add</button>
      <button onClick={handleSubCounter}>Sub</button>
      <button onClick={handleAdd100Counter}>Add 100</button>
    </div>
  );
});
