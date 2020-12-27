import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { getItems } from './itemSlice';
import { motion } from 'framer-motion';
import './Item.css';

const Items = () => {
    const {items} = useSelector(state => state.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems({ limit: 6 }))
    }, [dispatch]);


    const itemVariants = {
        hidden: {
            opacity: 0,
            y: '100vw'
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeIn',
                duration: 2
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
    const curatedItems = items.data;
    return (
        <motion.div className="main-shop"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="container-shop">
                {curatedItems && curatedItems.map(cur => {
                console.log('lll', items)
                    return (
                        <div key={cur._id} className="item-shop">
                        <h3 className="item-name">{cur.name}</h3>
                        </div>

                    )
                })}
                {/* <div className="item-shop"><h5 className="item-name">{items.name}</h5></div>
                <div className="item-shop"></div>
                <div className="item-shop"></div>
                <div className="item-shop"></div>
                <div className="item-shop"></div>
                <div className="item-shop"></div> */}
            </div>
            <div className="cart-container"></div>
        </motion.div>
    );

}

export default Items