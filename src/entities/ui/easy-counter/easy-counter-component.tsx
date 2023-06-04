import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { increase, reset, decrease } from './easy-counter-slice';

export const EasyCounterComponent = (() => {
  const dispath = useDispatch()
  const count = useSelector((state: RootState) => state.easyCounter.easyCount)

  const handleIncreaserer = () => {
    dispath(increase())
  }

  const handleDecreaser = () => {
    dispath(decrease())
  }

  const handleReset = () => {
    dispath(reset())
  }

  return (
    <div>
      <h3>Easy Counter</h3>
      <div>count: {count}</div>
      <button onClick={handleIncreaserer}>Add</button>
      <button onClick={handleDecreaser}>Sub</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
});
