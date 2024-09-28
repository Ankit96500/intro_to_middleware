import {join} from "path";


const cont_contact = (req,res)=>{
    res.sendFile(join(process.cwd(),'views','contactpg.html'))
}

export {cont_contact}

