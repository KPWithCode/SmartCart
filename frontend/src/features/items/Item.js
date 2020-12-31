import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, add } from './itemSlice';
import { motion } from 'framer-motion';
import Cart from '../../components/cart/Cart';
import itemVariants from './ItemVariants';
import './Item.css';

const Items = () => {
    const {items} = useSelector(state => state.items);
    const [toggle, setToggle] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems({ limit: 6 }));
    }, [dispatch]);

    const toggleCart = () => {
        setToggle(!toggle);
    }
    const curatedItems = items.data;
    return (
        <motion.div className="main-shop"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >

        <div className="container-products">
            <span className="toggle" onClick={toggleCart}>Toggle Cart</span>
            {curatedItems && curatedItems.map((item, index) => {
                return (
                    <div key={index} className="item-card">
                        <div>
                            <img className="item-image" src={item.image} alt="SmartCart Items" />
                            <h4 className="item-name">{item.name}</h4>
                        </div>
                        <button className="button" onClick={() => dispatch(add(item))}>Add</button>
                    </div>
                )
            })}
        </div>
        {toggle === false ? null : <Cart />}
        </motion.div>
    );

}

export default Items