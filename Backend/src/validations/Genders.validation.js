import { check } from "express-validator";

export const validationGender = [
  check("name", "El nombre del género es obligatorio y debe tener máximo 255 caracteres")
    .not()
    .isEmpty()
    .isLength({ max: 255 })
];
