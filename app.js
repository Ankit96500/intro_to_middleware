import express from 'express';
import bodyParser from 'body-parser';

import {join} from 'path'
const app = express();
const PORT = process.env.PORT || 8000

// bodyparser
app.use(bodyParser.urlencoded({extended:false}))


app.get('/add-product',(req,res)=>{
    res.sendFile(join(process.cwd(),'product.html'))
})

// invoke when get post request
app.post('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/')
})

// render the home page
app.get('/',(req,res)=>{
    res.sendFile(join(process.cwd(),'homepg.html'))
})

// server listen 
app.listen(PORT,()=>{
    console.log(`server running at.. http://localhost:${PORT}`);
})