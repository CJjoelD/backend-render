const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    mensaje: "Backend funcionando correctamente 🚀"
  });
});

app.get("/salud", (req, res) => {
  res.json({
    estado: "OK",
    servicio: "API de prueba"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
