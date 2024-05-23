import { Router } from "express";
import { registrarMascota, listarMascotas, actualizarMascota, buscarMascota, eliminarMascota, cargarImagen } from "../controllers/controllerPets.js";
import { validationPet } from "../validations/Pets.validation.js";

const router = Router();

router.post("/registrar", cargarImagen, validationPet, registrarMascota);
router.get("/listar", listarMascotas);
router.put("/actualizar/:id", cargarImagen, validationPet, actualizarMascota);
router.get("/buscar/:id", buscarMascota);
router.delete("/eliminar/:id", eliminarMascota);

export default router;
