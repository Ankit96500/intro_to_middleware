import e from "express";
import { join } from "path";
const route = e.Router();


// write the routes

// render the home page
route.get('/',(req,res)=>{
    res.sendFile(join(process.cwd(),'homepg.html'))
})



export default route
