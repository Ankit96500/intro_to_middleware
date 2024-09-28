import express from 'express';
import bodyParser from 'body-parser';
import path, { join } from 'path';

// const __filename = fileURLToPath(import.meta.url);

// const ppth = path.dirname(__filename,process.mainModule)

const app = express();
const PORT = process.env.PORT || 8000

// bodyparser
app.use(bodyParser.urlencoded({extended:false}))


// load routes:
import admin_routes from "./routes/admin.js"
import shop_routes from "./routes/shop.js"
import contact_routes from "./routes/contact.js"
import success_routes from "./routes/success.js"


//setup directory for templates
app.set('views','./views')

//filter path
app.use('/admin',admin_routes)
app.use(shop_routes)
app.use(contact_routes)
app.use(success_routes)


// unknow HTTP Request -if not any request found
app.use('*',(req,res) => {
    res.status(404).sendFile(join(process.cwd(),'views','404.html'))
});


// server listen 
app.listen(PORT,()=>{
    console.log(`server running at.. http://localhost:${PORT}`);
})