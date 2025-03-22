import { body, param, validationResult } from "express-validator";

const validateField = (field) => [
  body(field)
    .notEmpty()
    .withMessage(`el ${field} es obligatorio`)
    .isLength({ min: 3, max: 50 })
    .withMessage(`El ${field} debe tener minimo 3 caracteres y maximo 50`),
];

export const validateStringsField = [
  body("direccion")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("La dirección solo puede contener letras, números y espacios"),
];
export const validateCreateBebida = [
  ...validateField("nombre"),
  ...validateField("sabor"),
  ...validateField("tipo"),
];

export const validateUpdateBebida = [
  param("id").isInt().withMessage("El ID debe ser un numero entero"),

  body("nombre")
    .optional()
    .isLength({ mmin: 3, max: 50 })
    .withMessage("El nombre debe tener minimo 3 carcteres y maximo 50"),
  body("sabor")
    .optional()
    .isLength({ min: 3, max: 50 })
    .withMessage("El campo debe tener minimo 3 cartacteres y maximo 50"),

  body("tipo")
    .optional()
    .isLength({ min: 3, max: 50 })
    .withMessage("La longitud del campo es de minimo 3 caracteres y maximo 50"),
];

export const validateBebidaId = [
  param("id").isInt().withMessage("El ID debe ser numerico"),
];

export const handleValidateErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
