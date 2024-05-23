import { check } from "express-validator";

export const validationCategory = [
  check("name", "El nombre de la categoría es obligatorio y debe tener máximo 255 caracteres")
    .not()
    .isEmpty()
    .isLength({ max: 255 })
];
