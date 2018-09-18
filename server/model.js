
const goose = require("mongoose");


goose.connect("mongodb://localhost:27017/ProductManager", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db Product Manager"));

const ProductSchema = new goose.Schema({
    title:{
        type :String,
        require:[true, "Title is require"],
        minlength:[4, "minLength 4"]
        
    },
    price:{
        type:Number,
        require:true
    },
    url:{
        type:String
    }

},{timestamps : true});

const Product = goose.model('product', ProductSchema);

module.exports = Product;