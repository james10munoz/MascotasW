import express from "express";
import bodyParser from 'body-parser';
// import autenticacionRouter from "./src/routes/autenticacion.routes.js";

import Users from "./src/routes/routeUser.js";
import Categories from "./src/routes/routeCategories.js";
import generos from "./src/routes/routesGenders.js";
import rasas from "./src/routes/routeRaces.js";
import mascotas from "./src/routes/routesPets.js";

const servidor = express();

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: false}));

servidor.use('/usuario',Users);
servidor.use('/categoria',Categories)
servidor.use('/generos',generos)
servidor.use('/rasas',rasas)
servidor.use('/mascotas',mascotas)

const PORT = 4000;
servidor.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});