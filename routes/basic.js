const express = require('express');
const router = express.Router();

router.get('/aboutMe',(req,res)=>{
    const msg = {
        'slackUsername':'Ebuka.js.tsc',
        'backend': true,
        'age': 29,
        'bio': 'I am a Nodejs Developer with Over 3 Years of experience'
    }
    res.status(200).json(msg);
})


module.exports = router;