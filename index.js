const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta base
app.get("/", (req, res) => {
  res.json({ mensaje: "API funcionando correctamente 🚀" });
});

// 🔹 Simulación de usuarios
app.get("/usuarios", (req, res) => {
  const usuarios = [
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
    },
    {
      id: 3,
      nombre: "María López",
      correo: "maria.lopez@email.com",
      rol: "Usuario",
      estado: "Activo",
      fechaRegistro: "2025-12-15"
    }
  ];

  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
