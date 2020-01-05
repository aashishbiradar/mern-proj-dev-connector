const express = require('express');
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db')

const app = express();

//connect to mongodb
connectDB();

app.get('/',(req,res) => {
    res.send('api running');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});