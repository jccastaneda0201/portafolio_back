// Requerimos la libreria
const mongoose = require("mongoose");

// Configuramos la conexión a la base de datos
const dbConnection = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = {
  dbConnection,
};
