import express from "express";
import {
  getBebidas,
  getBebidasById,
  createBebida,
  updateBebida,
  deleteProduct,
} from "../controllers/bebidasControllers.js";
import {
  validateStringsField,
  validateCreateBebida,
  validateUpdateBebida,
  validateBebidaId,
  handleValidateErrors,
} from "../validators/validations.js";

const router = express.Router();

router.get("/bebidas", getBebidas);
router.get(
  "/bebidas/:id",
  validateBebidaId,
  handleValidateErrors,
  getBebidasById
);
router.post(
  "/bebidas/",
  validateCreateBebida,
  validateStringsField,
  handleValidateErrors,
  createBebida
);
router.put(
  "/bebidas/:id",
  validateUpdateBebida,
  handleValidateErrors,
  updateBebida
);
router.delete(
  "/bebidas/:id",
  validateBebidaId,
  handleValidateErrors,
  deleteProduct
);

export default router;
