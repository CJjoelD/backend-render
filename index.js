const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

/* Datos en memoria (simulan una BD) */
let productos = [
  { id: 1, nombre: "Arroz 1kg", precio: 1.25, stock: 50 },
  { id: 2, nombre: "Leche 1L", precio: 0.90, stock: 30 }
];

/* Ver productos */
app.get("/productos", (req, res) => {
  res.json(productos);
});

/* Agregar producto */
app.post("/productos", (req, res) => {
  const { nombre, precio, stock } = req.body;

  if (!nombre || !precio || !stock) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios"
    });
  }

  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
    stock
  };

  productos.push(nuevoProducto);

  res.json({
    mensaje: "Producto agregado correctamente ✅",
    producto: nuevoProducto
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
