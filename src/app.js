

// crear servidor
const express = require ("express");
const app = express();
const PUERTO = 8080;

const ProductManager = require("../src/controllers/product-manager.js");
const productManager = new ProductManager("./src/models/products.json");

app.use(express.json());

//listar todos los productos

app.get("/api/products", async (req, res) => {
  
    try {
        const limit = req.query.limit;
        const productos = await productManager.getProducts();

        if (limit) {
            res.json(productos.slice(0, limit));
        } else {
            res.json(productos);
        }
    } catch (error) {
        console.log("Error al obtener los productos", error);
        res.status(500).json({ error: "Error del servidor" });
    }

})


app.get("/", (req,res) => {
    res.send("funciona");
})
app.listen(PUERTO);