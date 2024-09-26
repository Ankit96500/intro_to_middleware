import e from "express";
import { join } from "path";
const route = e.Router();


// write the routes

// admin/add-product =>{get request}
route.get('/add-product',(req,res)=>{
    res.sendFile(join(process.cwd(),'views','product.html'))
})

// invoke when get post request
route.post('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/')
})



export default route