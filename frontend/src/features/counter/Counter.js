import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="increment">
    <span onClick={() => dispatch(decrement())}>
    <IndeterminateCheckBoxOutlinedIcon />
    </span>
    <span onClick={() => dispatch(increment())} >
    <AddBoxOutlinedIcon />  
    </span>
</div>
  );
}

export default Counter;
