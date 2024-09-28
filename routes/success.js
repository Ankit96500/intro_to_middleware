import e from "express";
import { cont_success } from "../controllers/success_controller.js";
const route = e.Router();

//write routes 

route.get('/success',cont_success)


export default route
