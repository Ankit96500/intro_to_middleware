import e from "express";
import { cont_contact } from "../controllers/contact_controller.js";
const route = e.Router();


// write the routes

// render the contact page
route.get('/contactus',cont_contact)



export default route
