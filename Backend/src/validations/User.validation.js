import { check } from "express-validator";

export const validationRegisterUser = [
  check("fullname", "El nombre completo es obligatorio, max 50 caracteres")
    .not()
    .isEmpty()
    .isLength({ max: 50 }),
  check("email", "El email es obligatorio y debe ser válido, max 50 caracteres")
    .isEmail()
    .isLength({ max: 50 }),
  check("password", "La contraseña es obligatoria, min 6 caracteres y max 50 caracteres")
    .not()
    .isEmpty()
    .isLength({ min: 6, max: 50 })
];
