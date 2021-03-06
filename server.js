const express = require('express');
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db')

const app = express();

//connect to mongodb
connectDB();

app.get('/',(req,res) => {
    res.send('api running');
});

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});