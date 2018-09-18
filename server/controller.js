const Product = require("./model.js")
module.exports = {
    allProduct : (req,res) =>Product.find({})
                    .then(data => console.log("root success")||res.json(data))
                    .catch(errs => console.log("root error")||res.json(errs)),
    createProduct : (req,res) =>Product.create(req.body)
                    .then(data => console.log("create Product success")||res.json(data))
                    .catch(errs => console.log("create Product error")||res.json(errs)),
    editProduct : (req,res) => Product.findByIdAndUpdate(req.params.id, req.body, {new :true, runValidators : true})
                            .then(data => console.log("edit product success")||res.json(data))
                            .catch(errs => console.log("edit product error")||res.json(errs)),
    deleteProdcut : (req,res) =>Product.findByIdAndRemove(req.params.id)
                            .then(data => console.log("delete product success")||res.json(data))
                            .catch(errs => console.log("delete product error")||res.json(errs)),
    getProduct : (req,res) =>Product.findById(req.params.id)
                            .then(data => console.log("get one product success")||res.json(data))
                            .catch(errs => console.log("get one product error")||res.json(errs)),
}