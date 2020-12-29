import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    selectCount,
    increment,
    decrement,
    del
} from '../items/itemSlice';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Counter from '../counter/Counter';
import './Cart.css';

const Cart = () => {
    const cart = useSelector(state => state.items.cart)
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="cart-container">
                <div className="delete-button" onClick={() => dispatch(del())}>
                    <DeleteOutlineIcon style={{ color: '#063301', fontSize: '2em' }} />
                </div>
                {cart && cart.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="cart-card">
                                <div className="cart-item">
                                    <img className="cart-item-image" src={item.image} />
                                    <h4>{item.name}</h4>
                                    <h3>{count}</h3>

                                    <Counter />
                                    {/* <div className="increment">
                                             <span onClick={() => dispatch(decrement())}>
                                             <IndeterminateCheckBoxOutlinedIcon />
                                             </span>
                                             <span onClick={() => dispatch(increment())} >
                                             <AddBoxOutlinedIcon />  
                                             </span>
                                         </div> */}

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart;
