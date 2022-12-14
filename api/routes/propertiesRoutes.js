import express from "express";
import * as propertiesController from "../controllers/propertiesController.js";
import { editPropertiesValidator } from "../middlewares/editPropertiesValidator.js";

const router = express.Router();

router
  .route("/")
  .post(propertiesController.create)
  .get(propertiesController.read);
router
  .route("/:id")
  .get(propertiesController.readById)
  .put(propertiesController.update)
  .delete(propertiesController.remove);

export default router;
