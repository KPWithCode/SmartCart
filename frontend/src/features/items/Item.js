import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from './itemSlice';
import { motion } from 'framer-motion';
import './Item.css';

const Items = () => {
    const { items } = useSelector(state => state.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems({ limit: 6 }));
    }, [dispatch]);


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
    const curatedItems = items.data;
    return (
        <motion.div className="main-shop"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="container-products">
                {curatedItems && curatedItems.map(cur => {
                    return (
                        <div key={cur._id} className="item-card">
                            <div className="">
                                <img className="item-image" src={cur.image} />
                                <h4 className="item-name">{cur.name}</h4>
                            </div>
                            <button className="button">Add</button>
                        </div>

                    )
                })}
            </div>
            <div className="cart-container"></div>
        </motion.div>
    );

}

export default Items