import express from 'express';
import bodyParser from 'body-parser';
import { join } from 'path';

const app = express();
const PORT = process.env.PORT || 8000

// bodyparser
app.use(bodyParser.urlencoded({extended:false}))


// load routes:
import admin_routes from "./routes/admin.js"
import shop_routes from "./routes/shop.js"

//filter path
app.use('/admin',admin_routes)
app.use(shop_routes)

// unknow HTTP Request -if not any request found

app.use('*',(req,res) => {
    res.status(404).sendFile(join(process.cwd(),'error.html'))
});


// server listen 
app.listen(PORT,()=>{
    console.log(`server running at.. http://localhost:${PORT}`);
})