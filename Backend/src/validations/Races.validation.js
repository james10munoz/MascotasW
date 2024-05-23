import { check } from "express-validator";

export const validationRace = [
  check("name", "El nombre de la raza es obligatorio y debe tener máximo 255 caracteres")
    .not()
    .isEmpty()
    .isLength({ max: 255 })
];
