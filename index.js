const express = require('express');
const app = express();
const cors = require('cors');
const basic = require('./routes/basic');

app.use(cors());
app.use(express.json());

//routes
app.use('/api',basic);

const PORT = process.env.PORT || 3033;

app.listen(PORT, ()=>{
    console.log('My server is running');
})
