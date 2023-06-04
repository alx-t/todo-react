import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { add10, mul, sub10, div } from './hard-counter-slice';

export const HardCounterComponent = (() => {
  const dispath = useDispatch()
  const count = useSelector((state: RootState) => state.hardCounter.hardCount)

  const handleAdd10 = () => {
    dispath(add10())
  }

  const handleSub10 = () => {
    dispath(sub10())
  }

  const handleMul = () => {
    dispath(mul())
  }

  const handleDiv = () => {
    dispath(div())
  }

  return (
    <div>
      <h3>Hard Counter</h3>
      <div>count: {count}</div>
      <button onClick={handleAdd10}>Add10</button>
      <button onClick={handleSub10}>Sub10</button>
      <button onClick={handleMul}>Mul</button>
      <button onClick={handleDiv}>Div</button>
    </div>
  );
});
