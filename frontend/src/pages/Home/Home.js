import React from 'react';
import './Home.css';
import garden from '../../assets/gardengirl.jpeg';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="main">
            <div className="container">
                <img className="background-img" src={garden} />
                <div>
                <h1 className="title">SmartCart</h1>
                </div>
                <div>
                <h1 className="subtitle">Shop Now</h1>
                    <Link to="/shop"><ArrowDownwardIcon style={{color: '#459922', fontSize: '6em'}}/></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;