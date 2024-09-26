import e from "express";
import { join } from "path";
const route = e.Router();


// write the routes

// render the contact page
route.get('/contactus',(req,res)=>{
    res.sendFile(join(process.cwd(),'views','contactpg.html'))
})

route.get('/success',(req,res)=>{
    res.sendFile(join(process.cwd(),'views','successpg.html'))
})




export default route
