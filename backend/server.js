const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const itemsRouter = require('./routes/items');

require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// database uri
const uri = process.env.ATLAS_URI;
const connectToMongo = async () => {
    try {
        await mongoose.connect(uri, { 
            useUnifiedTopology: true, useNewUrlParser: true,
        });
        console.log('mongoose is connected...🦌');
    } catch(e) {
        console.log('could not connect', e);
    }
};
connectToMongo();
    
app.use('/api', itemsRouter);

app.listen(port, () => console.log(`Smart Cart 🛒 on reusable port ${port}!`))