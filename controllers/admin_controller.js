import {join} from "path";
import fs from 'fs'
import { Product } from "../models/admin_models.js";
import { log } from "console";


// const cont_admin = (req,res)=>{
//     res.sendFile(join(process.cwd(),'views','contactpg.html'))
// }

const cont_admin = (req,res)=>{
    // console.log('user url',req.hostname);
    // console.log(req.body);
    // destructure
    const {title,size} = req.body
    console.log(`ttile: ${title}   size: ${size}`);
    
    const product_mod = new Product(title,size)
    product_mod.save();
    
    // console.log(`show data: ${Product.fetchAll()}`);
    Product.fetchAll((products) => {
        console.log(products);
    });


    res.redirect('/')
}

export {cont_admin}

