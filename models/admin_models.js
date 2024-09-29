
// STORE DATA IN MODEL.JS USING ARRAY
/*
const Product_array  = [];

class Product{
    constructor(t,s){
        this.title = t;
        this.size = s;
    }
    
    // save the product instance
    save() {
        Product_array.push(this);
    }
    
    // Static method to fetch all products from the array
    static fetchAll(){
        return Product_array;
    }
}

// expor this module using ES6
export { Product}
*/

// STORE DATA IN MODEL.JS USING  -> FILE SYSTEM
import {join} from 'path';
import fs from 'fs';

class Product{
    constructor(t,s){
        this.title = t;
        this.size = s;
    }
    
    // Save the product instance to the file system
    save() {
        const p = join(process.cwd(), 'data', 'product.json');    
        // Read the existing file content (if exists)
        fs.readFile(p, (err, fileContent) => {
            let productsArray = [];

            // If file exists and content is valid, parse the content
            if (!err) {
                productsArray = JSON.parse(fileContent);
            }

            // Add the current product to the array
            productsArray.push(this);

            // Write the updated array back to the file
            fs.writeFile(p, JSON.stringify(productsArray), (err) => {
                if (err) {
                    console.log('Error writing to file:', err);
                }
            });
        });
    }

    // Static method to fetch all products from the file system using a callback
    static fetchAll(cb) {
        const p = join(process.cwd(), 'data', 'product.json');
        
        // Read the file content
        fs.readFile(p, (err, fileContent) => {
            // If there's an error (file not found) or empty file, return an empty array
            if (err) {
                return cb([]);
            }
            // parse the JSON content and return it via the callback
            cb(JSON.parse(fileContent));
        });
    }
}


// expor this module using ES6
export { Product}

