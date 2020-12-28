import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, add } from './itemSlice';
// import {add} from '../cart/CartSlice';
import { motion } from 'framer-motion';
import Cart from '../cart/Cart';
import './Item.css';

const Items = () => {
    const {items} = useSelector(state => state.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems({ limit: 6 }));
    }, []);

    const itemVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1.2
            }
        },
        exit: {
            y: '-100vh',
            transition: {
                ease: 'easeOut',
                duration: 1
            }
        }
    };
    console.log(';iii', items)
    const curatedItems = items.data;
    return (
        <motion.div className="main-shop"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="container-products">
                {curatedItems && curatedItems.map(item => {
                    return (
                        <div key={item._id} className="item-card">
                            <div className="">
                                <img className="item-image" src={item.image} alt="SmartCart Items" />
                                <h4 className="item-name">{item.name}</h4>
                            </div>
                            <button className="button" onClick={() => dispatch(add(item))}>Add</button>
                        </div>
                    )
                })}
            </div>
            <Cart />
        </motion.div>
    );

}

export default Items