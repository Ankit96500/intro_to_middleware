import e from "express";
import { join } from "path";
import { cont_admin } from "../controllers/admin_controller.js";
const route = e.Router();


// write the routes

// admin/add-product =>{get request}
route.get('/add-product',(req,res)=>{
    res.sendFile(join(process.cwd(),'views','product.html'))
})

// invoke when get post request
route.post('/product',cont_admin)



export default route