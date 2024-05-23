import { Router } from "express";
import { registrarRaza, listarRazas, actualizarRaza, buscarRaza, eliminarRaza } from "../controllers/controllerRaces.js";
import { validationRace } from "../validations/Races.validation.js";

const router = Router();

router.post("/registrar", validationRace, registrarRaza);
router.get("/listar", listarRazas);
router.put("/actualizar/:id", validationRace, actualizarRaza);
router.get("/buscar/:id", buscarRaza);
router.delete("/eliminar/:id", eliminarRaza);

export default router;
