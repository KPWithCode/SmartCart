import React from 'react';
import { motion } from 'framer-motion';
import './Shop.css';


const Shop = () => {

    const shopVariants = {
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
        variants={shopVariants}
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
    )
}


export default Shop;