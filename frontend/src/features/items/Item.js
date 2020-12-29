import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, add } from './itemSlice';
import { motion } from 'framer-motion';
import Cart from '../cart/Cart';
import './Item.css';
import { selectCount } from '../counter/counterSlice';

const Items = () => {
    const {items} = useSelector(state => state.items);
    const [toggle, setToggle] = useState(false);
    const count = useSelector(selectCount);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItems({ limit: 6 }));
    }, []);

    const toggleCart = () => {
        setToggle(!toggle);
        console.log('toggle', toggle)
    }

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
            <span className="toggle" onClick={toggleCart}>Toggle Cart</span>
            {curatedItems && curatedItems.map((item, index) => {
                return (
                    <div key={index} className="item-card">
                        <div className="">
                            <img className="item-image" src={item.image} alt="SmartCart Items" />
                            <h4 className="item-name">{item.name}</h4>
                        </div>
                        <div>{count}</div>
                        <button className="button" onClick={() => dispatch(add(item))}>Add</button>
                    </div>
                )
            })}
        </div>
        {toggle == false ? null : <Cart />}
            
        </motion.div>
    );

}

export default Items