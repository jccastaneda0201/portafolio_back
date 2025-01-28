const { Schema, model } = require("mongoose");

const laboralSchema = new Schema(
  {
    id: Number,
    tituloPuesto: String,
    empresa: String,
    ubicacion: String,
    fechaInicio: Date,
    fechaFin: Date,
    actual: Boolean,
    descripcion: String,
    funciones: [{ type: String }],
    habilidades: [{ type: String }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Laboral = model("laboral", laboralSchema);
module.exports = Laboral;
