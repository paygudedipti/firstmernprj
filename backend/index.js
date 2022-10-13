const express = require("express");
const cors = require("cors");
require("./db/config");
// for user
const User = require("./db/User");

// for products

const Product = require("./db/Product");

const Jwt = require("jsonwebtoken");
const jwtKey = 'mernprj';



const app = express();
// const connectDB = async () =>{
//     mongoose.connect('mongodb://localhost:27017/e-commerce');
//     const ProductSchema = new mongoose.Schema({});
//     const product = mongoose.model('users', ProductSchema);
//     const data = await product.find();
//     console.log(data);
// }
// connectDB();

// app.get('/', (req,res)=>{
//     res.send("app is working");
// });


app.use(express.json());
app.use(cors());

// register code

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

// login code

app.post("/login", async (req, res) => {
    // console.log(req.body);
    //   res.send(req.body);
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {

            res.send(user);
        }


        else {
            res.send({ result: 'no user found' });
        }
    } else {
        res.send({ result: 'no user found' });
    }


});


// add product

app.post("/product", async (req, res) => {

    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
});

// list of product 

app.get("/products", async (req, res) => {

    let products = await Product.find();
    // console.log(products);

    if (products.length > 0) {
        res.send(products);
    } else {
        res.send({ result: "No Product Founds" });
    }

})

// delete product

app.delete("/product/:id", async (req, res) => {
    const result = await Product.deleteOne({ _id: req.params.id });
    res.send(result);
})

// update get product

app.get('/product/:id', async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    } else {
        res.send({ result: "norecord found" });

    }
})

// update product

app.put('/product/:id', async (req, res) => {
    let result = await Product.updateOne(
        { id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result);
})

// search data



app.get("/search/:key", async (req, res) => {
    let result = await Product.find({
        "$or": [
            { pname: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { category: { $regex: req.params.key } }
        ]
    });

    if (result) {
        res.send(result);
    } else {
        res.send({ result: "no record found" });

    }
})

app.listen(5000);





