import {join} from "path";


const cont_success = (req,res)=>{
    res.sendFile(join(process.cwd(),'views','successpg.html'))
 
}

export {cont_success}


