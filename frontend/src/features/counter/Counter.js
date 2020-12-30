import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectCount,
} from '../items/itemSlice';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import './Count.css';
const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <span onClick={() => dispatch(decrement())}>
        <IndeterminateCheckBoxOutlinedIcon />
      </span>
      <span className="count">{count}</span>
      <span onClick={() => dispatch(increment())} >
        <AddBoxOutlinedIcon />
      </span>
    </div>
  );
}

export default Counter;
