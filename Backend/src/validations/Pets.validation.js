import { check } from "express-validator";

export const validationPet = [
  check("race_id", "El ID de la raza es obligatorio y debe ser un número entero").notEmpty().isInt(),
  check("category_id", "El ID de la categoría es obligatorio y debe ser un número entero").notEmpty().isInt(),
  check("gender_id", "El ID del género es obligatorio y debe ser un número entero").notEmpty().isInt(),
];
