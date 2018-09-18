const {allProduct,editProduct,createProduct,deleteProdcut,getProduct} = require("./controller.js")


function router(app){
    app.get("/products/",allProduct),
    app.post("/products/new/",createProduct),
    app.put("/products/edit/:id",editProduct),
    app.delete("/products/delete/:id",deleteProdcut),
    app.get("/products/:id",getProduct)
}
module.exports = router;