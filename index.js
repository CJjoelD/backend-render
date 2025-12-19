const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensaje: "API funcionando correctamente 🚀" });
});

/* 👇 ESTE ENDPOINT ES CLAVE */
app.get("/mensaje", (req, res) => {
  res.json({
    titulo: "Mensaje desde el Backend 🚀",
    contenido: "Este mensaje fue enviado dinámicamente desde Render",
    fecha: new Date().toLocaleString()
  });
});

/* 👇 USUARIOS */
app.get("/usuarios", (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "Ana Pérez",
      correo: "ana.perez@email.com",
      rol: "Administrador",
      estado: "Activo",
      fechaRegistro: "2025-12-01"
    },
    {
      id: 2,
      nombre: "Carlos Gómez",
      correo: "carlos.gomez@email.com",
      rol: "Usuario",
      estado: "Inactivo",
      fechaRegistro: "2025-11-20"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
