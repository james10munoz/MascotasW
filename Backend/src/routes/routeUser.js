import { Router } from "express";
import { listar, registrar, actualizar, buscarPorId, eliminar } from "../controllers/controllerUser.js";
import { validationRegisterUser } from "../validations/User.validation.js";

const ruta = Router();

ruta.get("/listar", listar);
ruta.post("/registrar", validationRegisterUser, registrar);
ruta.put("/actualizar/:id", validationRegisterUser, actualizar);
ruta.get("/buscar/:id", buscarPorId);
ruta.delete("/eliminar/:id", eliminar);

// export default ruta;
// import { Router } from "express";
// import { listar, registrar, actualizar, buscarPorId, eliminar } from "../controllers/controllerUser.js";
// import { validarUser, verificarUserToken } from "../controllers/autenticacion.controller.js";
// import { validationRegisterUser } from "../validations/User.validation.js";

// const ruta = Router();

// // Rutas de autenticación
// ruta.post("/login", validarUser);

// // Rutas protegidas con token
// ruta.get("/listar", verificarUserToken, listar);
// ruta.post("/registrar", validationRegisterUser, registrar);
// ruta.put("/actualizar/:id", verificarUserToken, validationRegisterUser, actualizar);
// ruta.get("/buscar/:id", verificarUserToken, buscarPorId);
// ruta.delete("/eliminar/:id", verificarUserToken, eliminar);

export default ruta;
