import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItems } from './itemSlice';
import { motion } from 'framer-motion';
import './Item.css'

const Items = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems({ limit:6 }))
    },[dispatch]);

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
    return (
        <motion.div className="main-shop"
        variants={itemVariants}
        initial= "hidden"
        animate="visible"
        exit="exit"
        >
            <div className="container-shop">
                <div className="item-shop"></div>
                <div className="item-shop"></div>
                <div className="item-shop"></div>
                <div className="item-shop"></div>
                <div className="item-shop"></div>
                <div className="item-shop"></div>
            </div>
            <div className="cart-container"></div>
        </motion.div>
    );
   
}

export default Items