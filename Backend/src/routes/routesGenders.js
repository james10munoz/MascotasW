import { Router } from "express";
import { registrarGenero, listarGeneros, actualizarGenero, buscar, eliminar} from "../controllers/controllerGenders.js";
import { validationGender } from "../validations/Genders.validation.js";

const router = Router();


router.post("/registrar", validationGender, registrarGenero);
router.get("/listar", listarGeneros);
router.put("/actualizar/:id", validationGender, actualizarGenero);
router.get("/buscar/:id", buscar); 
router.delete("/eliminar/:id", eliminar); 

export default router;
