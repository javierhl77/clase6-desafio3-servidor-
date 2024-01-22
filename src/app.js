

// crear servidor
const express = require ("express");
const app = express();
const PUERTO = 8080;

const ProductManager = require("../src/controllers/product-manager.js");
const productManager = new ProductManager("./src/models/products.json");

app.use(express.json());

//listar todos los productos

app.get("/api/products", async (req, res) => {
    const productos = await productManager.getProducts();
    //res.send("funciona");
    res.send(productos);

})


app.get("/", (req,res) => {
    res.send("funciona");
})
app.listen(PUERTO);