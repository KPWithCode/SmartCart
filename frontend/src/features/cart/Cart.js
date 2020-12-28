import React from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { del } from '../items/itemSlice';
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './Cart.css';

const Cart = () => {
    const cart = useSelector(state => state.items.cart)

    
    return (
        <div className="cart-container">
                {cart && cart.map(item => {
                    return (
                        <div key={item._id.toString()}>
                            <div className="cart-card">
                                <div className="cart-item">
                                    <img className="cart-item-image" src={item.image} />
                                    <h4>{item.name}</h4>
                                    <div className="increment">

                                    </div>
                                    <div className="decrement">

                                    </div>
                                    {/* <div className="delete-button" onClick={() => dispatch(del(item._id))}>
                                    <DeleteOutlineIcon style={{ color: '#063301', fontSize: '2em' }} />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Cart;
