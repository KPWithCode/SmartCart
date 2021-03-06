import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    clear
} from '../../features/items/itemSlice';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './cart.css';

const Cart = () => {
    const cart = useSelector(state => state.items.cart)
    const dispatch = useDispatch();

    return (
        <div>
            {cart.length === 0 ? <div className="empty-cart"><h3>Cart is Empty</h3></div> : <div className="cart-container">
                <div className="delete-button" onClick={() => dispatch(clear())}>
                    <DeleteOutlineIcon style={{ color: '#063301', fontSize: '2em' }} />
                </div>
                {cart && cart.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="cart-card">
                                <div className="cart-item">
                                    <img className="cart-item-image" src={item.image} alt="curated item" />
                                    <h4>{item.name}</h4>
                                    <h3>$ {(item.price / 1000).toFixed(2)}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Cart;
