const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    fechaNacimiento: Date,
    //About me
    trabajoActual: String,
    aboutme: String,
    intereses: [{ type: String }],
    //redes sociales
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
    github: String,
    websiteURL: String,
  },
  { timestamps: true, versionKey: false }
);

const User = model("user", userSchema);
module.exports = User;
