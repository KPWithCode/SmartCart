const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


    

app.listen(port, () => console.log(`Smart Cart 🛒 on reusable port ${port}!`))