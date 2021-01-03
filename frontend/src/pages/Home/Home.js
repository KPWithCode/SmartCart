import React from 'react';
import garden from '../../assets/gardengirl.jpeg';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import homeVariants from '../../variants/homeVariants';
import './home.css';

const Home = () => {

    return (
        <motion.div className="main"
            variants={homeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="container">
                <h1 className="title">SmartCart</h1>
                <img className="background-img" src={garden} alt="flower girl" />
                <div>
                    <motion.div
                        animate={{
                            scale: [.7, 1.23, 1.23, 1, .7],
                            rotate: [0, 0, 360, 360, 0],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            loop: Infinity,
                            repeatDelay: 3
                        }}>
                        <Link to="/shop"><ArrowDownwardIcon style={{ color: '#063301', fontSize: '8em' }} /></Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
};

export default Home;