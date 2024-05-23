import { Router } from "express";
import { registrar, listar, actualizar,buscar, eliminar } from "../controllers/controllerCategories.js";
import { validationCategory } from "../validations/Categories.validation.js";


const router = Router();


router.post("/registrar", validationCategory, registrar); 
router.get("/listar", listar);
router.get("/buscar:id", buscar);
router.put("/actualizar:id", validationCategory, actualizar); 
router.delete("/eliminar:id", eliminar); 

export default router;
