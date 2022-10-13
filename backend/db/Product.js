const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    pname:String,
    price:String,
    category:String,
    userId:String,
    company:String
 
});


module.exports = mongoose.model("products", productSchema);