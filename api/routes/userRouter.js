import express from "express";
import * as userController from "../controllers/userController.js";
import { updateUserValidator } from "../middlewares/updateUserValidator.js";
const router = express.Router();

router.route("/").get(userController.read).post(userController.create);
router
  .route("/:id")
  .get(userController.readById)
  .put(userController.update)
  .delete(userController.remove);

//  .put(updateUserValidator, userController.update);

export default router;
