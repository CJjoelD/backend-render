const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Permitir peticiones desde cualquier frontend
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.json({
    mensaje: "Hola 👋 el backend está funcionando correctamente",
  });
});

// Ruta interactiva
app.get("/mensaje", (req, res) => {
  res.json({
    titulo: "Mensaje desde el Backend 🚀",
    contenido: "Este mensaje fue enviado dinámicamente desde Render",
    fecha: new Date().toLocaleString(),
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
