// const express= require('express')

// const app= express()
// const port=4000
// app.get('/abc',(req,res)=>
// {
//     res.send('get requesr')
// })

// app.listen(port)

const express = require('express');

const app = express();
const port = 4000;

app.get('/abc', (req, res) => {
    res.send('get request');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
